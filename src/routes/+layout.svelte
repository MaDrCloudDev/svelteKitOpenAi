<script lang="ts">
	import '../app.css'
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="max-w-2xl sm:max-w-5xl mx-auto px-4 py-8 pt-16">
	{@render children()}
</div>

<style>
	:global(*),
	:global(html),
	:global(body) {
		font-family: 'Fredoka', sans-serif;
	}
</style>
