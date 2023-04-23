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

<aside class="fixed w-full h-full bg-black shadow-lg text-3xl text-center z-50" class:open>
	<ul class="flex flex-col gap-6 content">
		<li class="hover:text-[#fffb00] mb-3">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == '/about'}
				href="https://madr.io/about/">about</a
			>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/tech/'}
				href="https://madr.io/tech/">tech</a
			>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/projects/'}
				href="https://madr.io/projects/">projects</a
			>
		</li>
		<li class="hover:text-[#fffb00] mb-3">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/weather/'}
				href="https://madr.io/weather/">weather?</a
			>
		</li>
		<li class="hover:text-[#fffb00]">
			<a class:active={$page.url.pathname == '/'} href="https://flirtatiousai.madr.io/">ai?</a>
		</li>
		<!-- <li class="hover:text-[#fffb00] mb-3">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/login/'}
				href="https://madr.io/login/">Login</a
			>
		</li> -->
		<li class="hover:text-[#fffb00] mb-3">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/contact/'}
				href="https://madr.io/contact/">contact</a
			>
		</li>
		<li class="mx-auto">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/'}
				href="https://madr.io/"
			>
				<LogoBW />
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
