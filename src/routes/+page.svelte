<script lang="ts">
	import { fly } from 'svelte/transition'

	let visible = $state(false)
	let context = $state('')
	let loading = $state(false)
	let error = $state(false)
	let answer = $state('')
	let lastSubmitTime = $state(0)

	const resetInput = () => {
		const input = document.querySelector('input') as HTMLInputElement
		input?.blur()
	}

	const handleSubmit = async (e: Event) => {
		e.preventDefault()
		if (!context.trim() || loading) return

		const now = Date.now()
		if (now - lastSubmitTime < 3000) {
			alert('Please wait a moment before submitting again!')
			return
		}
		lastSubmitTime = now

		loading = true
		error = false
		answer = ''
		visible = true

		try {
			const response = await fetch('/api/flirt', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ context })
			})

			if (!response.ok) throw new Error('Failed to get response')

			const reader = response.body?.getReader()
			if (!reader) throw new Error('No reader available')

			const decoder = new TextDecoder()
			context = ''
			resetInput()

			while (true) {
				const { done, value } = await reader.read()
				if (done) break

				const chunk = decoder.decode(value)
				const lines = chunk.split('\n')

				for (const line of lines) {
					if (line.startsWith('data: ')) {
						const data = line.slice(6)
						if (data === '[DONE]') return

						try {
							const parsed = JSON.parse(data)
							const content = parsed.choices?.[0]?.delta?.content || parsed.choices?.[0]?.text
							if (content) {
								if (loading) loading = false
								answer += content
							}
						} catch {}
					}
				}
			}
		} catch (err: any) {
			error = true
			console.error(err)
			if (err.message?.includes('429') || err.message?.includes('rate limit')) {
				alert('Too many requests! Please wait 5 minutes before trying again.')
			} else {
				alert('Something went wrong!')
			}
		} finally {
			loading = false
		}
	}
</script>

<svelte:head>
	<title>flirtatiousAI | MaDr (Free AI)</title>
	<meta
		name="description"
		content="A flirtatious AI chatbot powered by free Hugging Face API - now using Svelte 5!"
	/>
</svelte:head>

<h1 class="text-4xl sm:text-5xl font-bold text-[#328eef] text-center">flirtatiousAI</h1>
<p class="text-center text-green-400 text-sm mb-4">Powered by free Hugging Face AI 🤗</p>
<form class="flex flex-col max-w-lg w-full mx-auto overflow-hidden" onsubmit={handleSubmit}>
	<label class="text-[#fffb00] text-xl sm:text-2xl px-1 mb-1 ml-1" for="context"
		>Introduce yourself to the AI:</label
	>
	<input
		placeholder="e.g. Hi, I'm MaDr, I'm a developer from Arizona..."
		class="bg-black placeholder:text-gray-400 border-2 border-[#7F7D76] text-[#328eef] text-sm sm:text-xl px-3 py-2 mx-1"
		name="context"
		bind:value={context}
	/>
	<div class="flex justify-center mt-3 mb-3">
		<button
			type="submit"
			class="btn btn-primary text-[#7F7D76] hover:text-black text-lg"
			disabled={loading || !context.trim()}
			class:opacity-50={loading || !context.trim()}
			class:cursor-not-allowed={loading || !context.trim()}
		>
			{loading ? 'AI is thinking...' : 'Introduce Yourself'}
		</button>
	</div>
	{#if loading || (answer && visible)}
		<div class="pt-4" transition:fly={{ x: 200, duration: 500 }}>
			<h2 class="text-2xl font-bold text-right text-green-500 mb-1">flirtatiousAI:</h2>

			{#if loading}
				<div
					class="loading-container border-2 border-[#7F7D76] p-6 flex items-center justify-center"
				>
					<div class="loading-spinner"></div>
				</div>
			{:else if answer}
				<p class="ai-response response-box text-2xl border-2 border-[#7F7D76] p-4">{answer}</p>
			{/if}
		</div>
	{/if}
</form>

<div class="flex justify-center mt-2">
	<a
		href="https://madr.io/flirtatiousai"
		class="justify-center text-lg sm:text-2xl hover:text-[#fffb00] text-[#328eef] cursor-pointer"
		>Read about this project!</a
	>
</div>

<style>
	.btn {
		background-color: black;
		font-weight: 500;
		max-width: max-content;
		letter-spacing: 2px;
		padding: 12px 24px;
		box-shadow: 4px 4px 0 -1px #7f7d76;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		border: 2px solid #7f7d76;
		position: relative;
		overflow: hidden;
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

	.btn:is(:hover, :focus-visible) {
		background-color: #328eef;
		box-shadow: 6px 6px 0 -2px #fffb00;
		border-color: #328eef;
		transform: translateY(-2px);
	}

	.btn:is(:hover, :focus-visible)::before {
		left: 100%;
	}

	.btn:active {
		transform: translateY(1px);
		box-shadow: 2px 2px 0 -1px #fffb00;
	}

	.loading-spinner {
		width: 24px;
		height: 24px;
		border: 3px solid #7f7d76;
		border-top: 3px solid #328eef;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		filter: drop-shadow(0 0 4px rgba(50, 142, 239, 0.3));
	}

	:global(input:focus) {
		outline: none !important;
		border-color: #328eef !important;
		box-shadow: 0 0 0 2px rgba(50, 142, 239, 0.2) !important;
	}

	:global(.ai-response) {
		animation: textGlow 0.5s ease-in;
	}

	:global(a) {
		transition: all 0.3s ease;
		text-decoration: none;
	}

	:global(a:hover) {
		text-shadow: 0 0 8px currentColor;
		transform: translateY(-1px);
	}

	.loading-container {
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(127, 125, 118, 0.1));
		backdrop-filter: blur(2px);
	}

	.response-box {
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(127, 125, 118, 0.05));
		border-image: linear-gradient(45deg, #7f7d76, #328eef) 1;
		transition: all 0.3s ease;
	}

	.response-box:hover {
		box-shadow: 0 0 15px rgba(50, 142, 239, 0.2);
	}

	:global(h1) {
		animation: titlePulse 3s ease-in-out infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes textGlow {
		0% {
			opacity: 0.5;
			transform: scale(0.98);
		}
		100% {
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
</style>
