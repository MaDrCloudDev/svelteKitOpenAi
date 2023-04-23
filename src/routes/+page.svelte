<script lang="ts">
	import { fly } from 'svelte/transition'
	import type { CreateCompletionResponse } from 'openai'
	import { SSE } from 'sse.js'

	let visible = false

	let context = ''
	let loading = false
	let error = false
	let answer = ''

	function resetInput() {
		document.querySelector('input').value = ''
		document.activeElement.blur()
		// document.querySelector('input').focus(); //breaks on mobile
	}

	const handleSubmit = async () => {
		loading = true
		error = false
		answer = ''

		const eventSource = new SSE('/api/flirt', {
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
		resetInput()
		visible = true
	}
</script>

<svelte:head>
	<title>flirtatiousAI | MaDr</title>
	<meta name="description" content="A bot that flirts with you by MaDrCloudDev." />
</svelte:head>

<h1 class="text-4xl sm:text-5xl font-bold text-[#328eef] text-center">flirtatiousAI</h1>
<form
	class="flex flex-col max-w-lg w-full mx-auto overflow-hidden"
	on:submit|preventDefault={handleSubmit}
>
	<label class="text-[#fffb00] text-xl sm:text-2xl px-1 mb-1 ml-1" for="context"
		>Introduce yourself to the AI:</label
	>
	<input
		placeholder="e.g. Hi, I'm MaDr, I'm a developer from Arizona..."
		class="bg-black placeholder:text-gray-500 rounded-lg border-2 border-gray-600 text-[#328eef] text-sm sm:text-xl px-2 py-2 mx-1"
		name="context"
		bind:value={context}
	/>
	<button
		type="submit"
		class="btn mb-2 btn-black w-fit mx-auto mt-3 p-4 rounded-full border border-gray-900 text-[#7f7d76] shadow-md shadow-gray-700 hover:scale-110 ease-in duration-200 hover:text-[#fffb00] hover:border-[#328eef] hover:shadow-[#328eef] text-sm md:text-lg"
		>Introduce Yourself</button
	>
	{#if answer}
		{#if visible}
			<div
				class="pt-4"
				transition:fly={{ x: 200, duration: 2000 }}
				on:introstart={() => (status = 'intro started')}
				on:outrostart={() => (status = 'outro started')}
				on:introend={() => (status = 'intro ended')}
				on:outroend={() => (status = 'outro ended')}
			>
				<h2 class="text-2xl font-bold text-right text-green-500 mb-1">flirtatiousAI:</h2>

				<p class="text-2xl border-2 border-gray-500 rounded-2xl p-4">{answer}</p>
			</div>
		{/if}
	{/if}
</form>

<div class="flex justify-center mt-2">
	<a
		href="https://madr.io/flirtatiousai"
		class="justify-center text-lg sm:text-2xl hover:text-[#fffb00] text-[#328eef] cursor-pointer"
		>Read about this project!</a
	>
</div>
