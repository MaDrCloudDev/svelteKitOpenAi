<script lang="ts">
	import LogoNav from '$lib/LogoNav.svelte'
	import Hamburger from '$lib/Hamburger.svelte'
	import { page } from '$app/stores'
	import type { PageData } from './$types'

	export let sidebar = false
	export let data: PageData

	const toggle = () => {
		sidebar = false
	}
</script>

<header class="sticky top-0 z-50 bg-black text-[#7f7d76]">
	<div class="pt-2 pb-2 flex-grow max-w-lg mx-auto">
		<ul class="flex items-center justify-between">
			<li class="ml-2">
				<a on:click={toggle} href="https://madr.io/" aria-label="MaDr Logo">
					<LogoNav />
				</a>
			</li>
			<div class="w-full justify-around max-w-md mx-auto text-xl hidden md:flex">
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/about'} href="https://madr.io/about/">About</a>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/tech'} href="https://madr.io/tech/">Tech</a>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == 'https://madr.io/projects/'} href="/projects"
						>Projects</a
					>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == 'https://madr.io/contact/'} href="/contact"
						>Contact</a
					>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == 'https://madr.io/weather/'} href="/weather"
						>Weather?</a
					>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == 'https://madr.io/login/'} href="/login">Login</a>
				</li>
			</div>
			<li>
				<Hamburger bind:open={sidebar} />
			</li>
		</ul>
	</div>
</header>
