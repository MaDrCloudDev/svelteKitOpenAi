<script>
	import { page } from '$app/stores'
	import LogoBW from '$lib/LogoBW.svelte'
	export let open = false

	const toggle = () => {
		open = !open
	}
	console.log($page.url.pathname)
</script>

<menu class="fixed w-full h-full bg-black shadow-lg text-3xl text-center z-50" class:open>
	<section class="flex flex-col gap-6 content">
		<item class="hover:text-[#fffb00] mb-3"
			><a
				on:click={toggle}
				class:active={$page.url.pathname == '/about'}
				href="https://madr.io/about/">about</a
			></item
		>
		<item class="hover:text-[#fffb00] mb-3"
			><a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/tech/'}
				href="https://madr.io/tech/"><item class="hover:text-[#fffb00] mb-3">tech</item></a
			></item
		>
		<item class="hover:text-[#fffb00] mb-3"
			><a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/projects/'}
				href="https://madr.io/projects/"><item class="hover:text-[#fffb00] mb-3">projects</item></a
			></item
		>
		<item class="hover:text-[#fffb00] mb-3"
			><a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/weather/'}
				href="https://madr.io/weather/"><item class="hover:text-[#fffb00] mb-3">weather?</item></a
			></item
		>
		<item class="hover:text-[#fffb00] mb-3"
			><a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/contact/'}
				href="https://madr.io/contact/"><item class="hover:text-[#fffb00] mb-3">contact</item></a
			></item
		>
		<item class="mx-auto">
			<a
				on:click={toggle}
				class:active={$page.url.pathname == 'https://madr.io/'}
				href="https://madr.io/"
			>
				<LogoBW />
			</a></item
		>
	</section>
</menu>

<style>
	menu {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
