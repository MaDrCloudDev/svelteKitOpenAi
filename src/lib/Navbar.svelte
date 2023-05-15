<script lang="ts">
	import Hamburger from '$lib/Hamburger.svelte'
	import { page } from '$app/stores'
	import type { PageData } from './$types'
	import LogoNavBw from './LogoNavBw.svelte'

	export let sidebar = false
	export let data: PageData

	const toggle = () => {
		sidebar = false
	}
</script>

<nav
	style="background-color: hsla(0, 0%, 0%, 0.5)"
	class="px-3 mt-2 flex justify-between sticky top-0 z-50 backdrop-blur-sm max-w-2xl sm:max-w-4xl mx-auto"
>
	<section class="hidden md:flex w-full gap-20 items-center text-xl">
		<item class="mb-2"
			><a on:click={toggle} href="https://madr.io/" aria-label="MaDr Logo"><LogoNavBw /></a></item
		>
		<item
			><a class:active={$page.url.pathname == '/about'} href="https://madr.io/about">about</a></item
		>
		<item><a class:active={$page.url.pathname == '/tech'} href="https://madr.io/tech">tech</a></item
		>
		<item
			><a class:active={$page.url.pathname == '/projects'} href="https://madr.io/projects"
				>projects</a
			></item
		>
		<item
			><a class:active={$page.url.pathname == '/weather'} href="https://madr.io/weather">weather?</a
			></item
		>
		<item
			><a class:active={$page.url.pathname == '/'} href="https://flirtatiousai.madr.io/">
				ai?
			</a></item
		>
		<item
			><a class:active={$page.url.pathname == '/contact'} href="https://madr.io/contact">contact</a
			></item
		>
	</section>
	<div />
	<Hamburger bind:open={sidebar} />
</nav>
