<script>
	import '../app.css'
	export let data
	import Navbar from '$lib/Navbar.svelte'
	export let open = false
	import Sidebar from '$lib/Sidebar.svelte'
	import Footer from '$lib/Footer.svelte'
	import '@fontsource/fredoka';
</script>

<Navbar data bind:sidebar={open} />
<Sidebar bind:open />
<div class="max-w-2xl sm:max-w-5xl mx-auto px-4">
	<slot />
</div>
<Footer />

<style>
	*,
	html,
	body {
		font-family: 'Fredoka', sans-serif;
	}
</style>