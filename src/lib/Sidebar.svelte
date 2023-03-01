<script>
	import { page } from '$app/stores'
	import LogoColor from '$lib/LogoColor.svelte'
	import LogoBW from '$lib/LogoBW.svelte'
	export let open = false

	const toggle = () => {
		open = !open
	}
	console.log($page.url.pathname)
</script>

<aside class="fixed w-full h-full bg-black shadow-lg text-4xl text-center z-50" class:open>
	<ul class="flex flex-col gap-6 content">
		<li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/about'} href="/about">About</a>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/tech'} href="/tech">Tech</a>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/projects'} href="/projects"
				>Projects</a
			>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/contact'} href="/contact"
				>Contact</a
			>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/weather'} href="/weather"
				>Weather?</a
			>
		</li>
		<!-- <li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/guestbook'} href="/guestbook"
				>Guestbook</a
			>
		</li> -->
		<li class="hover:text-[#fffb00] mb-3">
			<a on:click={toggle} class:active={$page.url.pathname == '/login'} href="/login">Login</a>
		</li>
		<li class="mx-auto">
			<a on:click={toggle} class:active={$page.url.pathname == '/'} href="/">
				{#if $page.url.pathname == '/'}
					<LogoColor />
				{:else}
					<LogoBW />
				{/if}
			</a>
		</li>
	</ul>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
