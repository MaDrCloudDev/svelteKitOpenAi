<script lang="ts">
	import { fly } from 'svelte/transition';

	let message = $state('');
	let response = $state('');
	let loading = $state(false);
	let visible = $state(false);
	
	let lastSubmitTime = 0;
	const debounceDelay = 1000;

	const handleSubmit = async () => {
		const now = Date.now();
		if (now - lastSubmitTime < debounceDelay) {
			return;
		}
		lastSubmitTime = now;

		if (!message.trim()) return;

		loading = true;
		response = '';
		visible = false;

		try {
			const res = await fetch('/api/flirt', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message }),
			});

			if (!res.ok) {
				const errorData = await res.json().catch(() => ({ error: { message: res.statusText } }));
				throw new Error(errorData.error?.message || `Server error: ${res.status}`);
			}

			message = '';
			
			const reader = res.body?.getReader();
			if (!reader) throw new Error('No response stream available');

			const decoder = new TextDecoder();
			let buffer = '';

			while (true) {
				const { done, value } = await reader.read();
				if (done) break;

				buffer += decoder.decode(value, { stream: true });
				const lines = buffer.split('\n');
				buffer = lines.pop() || '';

				for (const line of lines) {
					if (line.startsWith('data: ')) {
						const data = line.slice(6);
						
						if (data === '[DONE]') continue;
						
						try {
							const parsed = JSON.parse(data);
							const content = parsed.choices?.[0]?.delta?.content;
							if (content) {
								response += content;
								if (!visible) visible = true;
							}
						} catch (e) {
							console.warn('Failed to parse SSE data:', data);
						}
					}
				}
			}

		} catch (error) {
			console.error('Chat error:', error);
			response = `Error: ${error instanceof Error ? error.message : 'Something went wrong. Please try again.'}`;
			visible = true;
		} finally {
			loading = false;
		}
	};
</script>

<svelte:head>
	<title>flirtatiousAI | MaDr</title>
	<meta name="description" content="A charming AI companion powered by Hugging Face Llama 3.2" />
</svelte:head>

<h1 class="text-4xl sm:text-5xl font-bold text-[#328eef] text-center mb-8">flirtatiousAI</h1>

<form class="flex flex-col max-w-lg w-full mx-auto overflow-hidden" on:submit|preventDefault={handleSubmit}>
	<label class="text-[#fffb00] text-xl sm:text-2xl px-1 mb-1 ml-1" for="message">
		What's on your mind?
	</label>
	
	<input
		placeholder="Say something charming..."
		class="bg-black placeholder:text-gray-400 border-2 border-[#7F7D76] text-[#328eef] text-sm sm:text-xl px-3 py-2 mx-1"
		name="message"
		bind:value={message}
		disabled={loading}
	/>
	
	<div class="flex justify-center mt-3 mb-3">
		<button 
			type="submit" 
			disabled={loading || !message.trim()}
			class="btn btn-primary text-[#7F7D76] hover:text-black text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
		>
			{#if loading}
				<div class="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></div>
				Thinking...
			{:else}
				Send Message
			{/if}
		</button>
	</div>

	{#if response && visible}
		<div
			class="pt-4 animate-fade-in"
			transition:fly={{ x: 200, duration: 1000 }}
		>
			<h2 class="text-2xl font-bold text-right text-green-500 mb-2">flirtatiousAI:</h2>
			<div class="text-lg border-2 border-[#7F7D76] p-4 bg-gray-900 rounded">
				<p class="whitespace-pre-wrap">{response}</p>
			</div>
		</div>
	{/if}
</form>

<div class="flex justify-center mt-6">
	<a
		href="https://madr.io/flirtatiousai"
		class="text-lg sm:text-xl hover:text-[#fffb00] text-[#328eef] cursor-pointer transition-colors"
	>
		Learn more about this project
	</a>
</div>

<style>
	.btn {
		background-color: black;
		font-weight: 500;
		max-width: max-content;
		letter-spacing: 2px;
		padding: 10px 22px;
		box-shadow: 4px 4px 0 -1px #7f7d76;
		transition: 0.25s ease;
		border: 1px solid black;
	}

	.btn:is(:hover, :focus-visible) {
		background-color: #328eef;
		box-shadow: 5px 5px 0 -2px #fffb00;
		border: 1px solid #328eef;
	}
</style>
