<script lang="ts">
	import { fly } from 'svelte/transition'
	import { notify } from '$lib/notifications.svelte'
	import Toast from '$lib/components/Toast.svelte'

	let inputElement = $state<HTMLInputElement>()
	let context = $state('')
	let loading = $state(false)
	let answer = $state('')
	let showResponse = $state(false)
	let lastSubmitTime = 0

	const COOLDOWN_MS = 5000

	let canSubmit = $derived(!loading && context.trim().length > 0)

	async function handleSubmit(e: Event) {
		e.preventDefault()
		if (!canSubmit) return

		const now = Date.now()
		const timeSinceLast = now - lastSubmitTime

		if (timeSinceLast < COOLDOWN_MS) {
			const remaining = Math.ceil((COOLDOWN_MS - timeSinceLast) / 1000)
			notify(`Please wait ${remaining} seconds before submitting again`, 'warning')
			return
		}

		lastSubmitTime = now
		loading = true
		answer = ''
		showResponse = true

		try {
			const response = await fetch('/api/flirt', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ context: context.trim() })
			})

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}))
				if (response.status === 429) {
					notify('Rate limit exceeded. Please wait before trying again.', 'warning', 8000)
				} else {
					notify(errorData.message || 'Failed to get response', 'error')
				}
				return
			}

			const reader = response.body?.getReader()
			if (!reader) {
				notify('No response stream available', 'error')
				return
			}

			const decoder = new TextDecoder()
			context = ''
			inputElement?.blur()

			while (true) {
				const { done, value } = await reader.read()
				if (done) break

				const chunk = decoder.decode(value)
				const lines = chunk.split('\n')

				for (const line of lines) {
					if (!line.startsWith('data: ')) continue

					const data = line.slice(6)
					if (data === '[DONE]') {
						loading = false
						return
					}

					try {
						const parsed = JSON.parse(data)
						const content = parsed.choices?.[0]?.delta?.content ?? parsed.choices?.[0]?.text
						if (content) {
							loading = false
							answer += content
						}
					} catch {
						// malformed SSE data, ignore
					}
				}
			}
		} catch (err) {
			notify('Something went wrong! Please try again.', 'error')
			console.error(err)
		} finally {
			loading = false
		}
	}

	function reset() {
		answer = ''
		showResponse = false
		context = ''
	}
</script>

<svelte:head>
	<title>flirtatiousAI | Free AI Chat</title>
	<meta
		name="description"
		content="A playful AI companion powered by Hugging Face - built with Svelte 5"
	/>
</svelte:head>

<Toast />

<div class="container">
	<header class="header">
		<h1 class="title">flirtatiousAI</h1>
		<p class="subtitle">Powered by free Hugging Face AI 🤗</p>
	</header>

	<form class="form" onsubmit={handleSubmit}>
		<label class="label" for="context">Introduce yourself to the AI:</label>
		<input
			bind:this={inputElement}
			bind:value={context}
			class="input"
			name="context"
			placeholder="e.g. Hi, I'm Alex, a developer from Arizona..."
			disabled={loading}
		/>

		<div class="actions">
			<button type="submit" class="btn btn-primary" disabled={!canSubmit}>
				{loading ? 'AI is thinking...' : 'Introduce Yourself'}
			</button>
			{#if showResponse && !loading}
				<button type="button" class="btn btn-secondary" onclick={reset}> Start Over </button>
			{/if}
		</div>

		{#if showResponse}
			<div class="response-wrapper" transition:fly={{ x: 200, duration: 500 }}>
				<h2 class="response-title">flirtatiousAI:</h2>

				{#if loading}
					<div class="loading-box">
						<div class="spinner"></div>
					</div>
				{:else if answer}
					<p class="response-box">{answer}</p>
				{/if}
			</div>
		{/if}
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 36rem;
		margin: 0 auto;
	}

	.header {
		text-align: center;
		margin-bottom: 1rem;
	}

	.title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #328eef;
		animation: titlePulse 3s ease-in-out infinite;
	}

	.subtitle {
		color: #22c55e;
		font-size: 0.875rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-top: 2rem;
	}

	.label {
		color: #fffb00;
		font-size: 1.25rem;
		padding: 0 0.25rem;
		margin-bottom: 0.25rem;
	}

	.input {
		background: black;
		border: 2px solid #7f7d76;
		color: #328eef;
		font-size: 1rem;
		padding: 0.5rem 0.75rem;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}

	.input:focus {
		outline: none;
		border-color: #328eef;
		box-shadow: 0 0 0 2px rgba(50, 142, 239, 0.2);
	}

	.input::placeholder {
		color: #6b7280;
	}

	.input:disabled {
		opacity: 0.6;
	}

	.actions {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.btn {
		background-color: black;
		font-weight: 500;
		letter-spacing: 2px;
		padding: 0.75rem 1.5rem;
		border: 2px solid #7f7d76;
		box-shadow: 4px 4px 0 -1px #7f7d76;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
		font-size: 1rem;
		cursor: pointer;
	}

	.btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(50, 142, 239, 0.2), transparent);
		transition: left 0.6s;
	}

	.btn:hover:not(:disabled)::before {
		left: 100%;
	}

	.btn:hover:not(:disabled) {
		background-color: #328eef;
		border-color: #328eef;
		box-shadow: 6px 6px 0 -2px #fffb00;
		transform: translateY(-2px);
	}

	.btn:active:not(:disabled) {
		transform: translateY(1px);
		box-shadow: 2px 2px 0 -1px #fffb00;
	}

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn-primary {
		color: #7f7d76;
	}

	.btn-primary:hover:not(:disabled) {
		color: black;
	}

	.btn-secondary {
		color: #328eef;
		border-color: #328eef;
		box-shadow: 4px 4px 0 -1px #328eef;
	}

	.btn-secondary:hover:not(:disabled) {
		background-color: #328eef;
		color: black;
	}

	.response-wrapper {
		padding-top: 1rem;
	}

	.response-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: #22c55e;
		text-align: right;
		margin-bottom: 0.25rem;
	}

	.loading-box,
	.response-box {
		border: 2px solid #7f7d76;
		padding: 1rem;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(127, 125, 118, 0.05));
	}

	.loading-box {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 4rem;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(127, 125, 118, 0.1));
		backdrop-filter: blur(2px);
	}

	.response-box {
		font-size: 1.5rem;
		border-image: linear-gradient(45deg, #7f7d76, #328eef) 1;
		transition: box-shadow 0.3s;
		animation: textGlow 0.5s ease-in;
	}

	.response-box:hover {
		box-shadow: 0 0 15px rgba(50, 142, 239, 0.2);
	}

	.spinner {
		width: 24px;
		height: 24px;
		border: 3px solid #7f7d76;
		border-top-color: #328eef;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		filter: drop-shadow(0 0 4px rgba(50, 142, 239, 0.3));
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes textGlow {
		from {
			opacity: 0.5;
			transform: scale(0.98);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes titlePulse {
		0%,
		100% {
			text-shadow: 0 0 5px rgba(50, 142, 239, 0.3);
		}
		50% {
			text-shadow:
				0 0 20px rgba(50, 142, 239, 0.5),
				0 0 30px rgba(50, 142, 239, 0.3);
		}
	}

	@media (min-width: 640px) {
		.title {
			font-size: 3rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.label {
			font-size: 1.5rem;
		}

		.input {
			font-size: 1.25rem;
		}
	}
</style>
