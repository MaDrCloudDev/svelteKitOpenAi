<script lang="ts">
	import '../app.css'
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children }: Props = $props()
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="layout">
	{@render children()}
</div>

<style>
	.layout {
		max-width: 42rem;
		margin: 0 auto;
		padding: 4rem 1rem 2rem;
		min-height: 100vh;
	}

	@media (min-width: 640px) {
		.layout {
			max-width: 64rem;
		}
	}
</style>
