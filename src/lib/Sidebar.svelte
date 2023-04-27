<script>
	import { page } from '$app/stores'
	import LogoBW from '$lib/LogoBW.svelte'
	export let open = false

	const toggle = () => {
		open = !open
	}
	console.log($page.url.pathname)
</script>

<aside class="fixed w-full h-full bg-black shadow-lg text-3xl text-center z-50" class:open>
	<ul class="flex flex-col gap-6 content">
		<a on:click={toggle} class:active={$page.url.pathname == '/about'} href="https://madr.io/about/"
			><li class="hover:text-[#fffb00] mb-3">about</li></a
		>
		<a
			on:click={toggle}
			class:active={$page.url.pathname == 'https://madr.io/tech/'}
			href="https://madr.io/tech/"><li class="hover:text-[#fffb00] mb-3">tech</li></a
		>
		<a
			on:click={toggle}
			class:active={$page.url.pathname == 'https://madr.io/projects/'}
			href="https://madr.io/projects/"><li class="hover:text-[#fffb00] mb-3">projects</li></a
		>
		<a
			on:click={toggle}
			class:active={$page.url.pathname == 'https://madr.io/weather/'}
			href="https://madr.io/weather/"><li class="hover:text-[#fffb00] mb-3">weather?</li></a
		>
		<a class:active={$page.url.pathname == '/'} href="https://flirtatiousai.madr.io/"
			><li class="hover:text-[#fffb00]">ai?</li></a
		>
		<a
			on:click={toggle}
			class:active={$page.url.pathname == 'https://madr.io/contact/'}
			href="https://madr.io/contact/"><li class="hover:text-[#fffb00] mb-3">contact</li></a
		>
		<div class="mx-auto">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/'}
				href="https://madr.io/"
				><li>
					<LogoBW />
				</li></a
			>
		</div>
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
