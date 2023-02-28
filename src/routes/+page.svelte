<script lang="ts">
	// import Button from '$lib/components/Button.svelte'
	import type { CreateCompletionResponse } from 'openai'
	import { SSE } from 'sse.js'

	let context = ''
	let loading = false
	let error = false
	let answer = ''

	const handleSubmit = async () => {
		loading = true
		error = false
		answer = ''

		const eventSource = new SSE('/api/explain', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ context })
		})

		context = ''

		eventSource.addEventListener('error', (e) => {
			error = true
			loading = false
			alert('Something went wrong!')
		})

		eventSource.addEventListener('message', (e) => {
			try {
				loading = false

				if (e.data === '[DONE]') {
					return
				}

				const completionResponse: CreateCompletionResponse = JSON.parse(e.data)

				const [{ text }] = completionResponse.choices

				answer = (answer ?? '') + text
			} catch (err) {
				error = true
				loading = false
				console.error(err)
				alert('Something went wrong!')
			}
		})

		eventSource.stream()
	}
</script>

<h1 class="text-4xl font-bold text-[#328eef]">flirtatiousBot</h1>
<form on:submit|preventDefault={() => handleSubmit()}>
	<label class="text-[#fffb00] text-xl mb-1" for="context">Introduce yourself to the bot:</label>
	<textarea class="bg-black border text-[#328eef]" name="context" rows="5" bind:value={context} />
	<button
		class="btn btn-black w-fit mx-auto mt-3 p-4 rounded-full border border-gray-900 text-[#7f7d76] shadow-md shadow-gray-700 hover:scale-110 ease-in duration-200 hover:text-[#fffb00] hover:border-[#328eef] hover:shadow-[#328eef] text-sm md:text-lg"
		>Introduce Yourself</button
	>
	<div class="pt-4">
		<h2 class="text-2xl font-bold">flirtatiousBot:</h2>
		{#if answer}
			<p>{answer}</p>
		{/if}
	</div>
</form>
