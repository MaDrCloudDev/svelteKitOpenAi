<script>
	import '../app.css'
	import { page } from '$app/stores'
	export let data
	import Navbar from '$lib/Navbar.svelte'
	export let open = false
	import Sidebar from '$lib/Sidebar.svelte'
</script>

<Navbar data bind:sidebar={open} />
<Sidebar bind:open />
<div class="flex flex-col items-center px-8">
	<slot />
</div>
