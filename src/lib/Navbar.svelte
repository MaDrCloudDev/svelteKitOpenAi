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

<ul
	style="background-color: hsla(0, 0%, 0%, 0.5)"
	class="px-3 mt-2 flex justify-between sticky top-0 z-50 backdrop-blur-sm max-w-2xl sm:max-w-4xl mx-auto"
>
	<div class="hidden md:flex w-full justify-between items-center text-xl">
		<a on:click={toggle} href="https://madr.io/" aria-label="MaDr Logo"><li><LogoNavBw /></li></a>
		<a class:active={$page.url.pathname == '/about'} href="https://madr.io/about"><li>about</li></a>
		<a class:active={$page.url.pathname == '/tech'} href="https://madr.io/tech"><li>tech</li></a>
		<a class:active={$page.url.pathname == '/projects'} href="https://madr.io/projects"><li>projects</li></a>
		<a class:active={$page.url.pathname == '/weather'} href="https://madr.io/weather"><li>weather?</li></a>
		<a class:active={$page.url.pathname == '/'} href="https://flirtatiousai.madr.io/"><li>
			ai?
		</li></a>
		<a class:active={$page.url.pathname == '/contact'} href="https://madr.io/contact"><li>contact</li></a>
	</div>
	<div />
	<li class=""><Hamburger bind:open={sidebar} /></li>
</ul>