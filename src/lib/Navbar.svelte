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

<!-- <header class="sticky top-0 z-50 bg-black text-[#7f7d76]">
	<div class="pb-2 flex-grow max-w-2xl sm:max-w-4xl text-xl sm:text-xl mx-auto">
		<ul class="flex items-center justify-between">
			<li class="ml-2">
				<a on:click={toggle} href="https://madr.io/" aria-label="MaDr Logo">
					<LogoNav />
				</a>
			</li>
			<div class="w-full justify-around mx-auto hidden md:flex mt-2">
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/about'} href="https://madr.io/about/">About</a>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/tech'} href="https://madr.io/tech/">Tech</a>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/projects'} href="https://madr.io/projects/"
						>Projects</a
					>
				</li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/weather'} href="https://madr.io/weather/"
						>Weather?</a
					> -->
				<!-- </li>
				<li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/'} href="/">AI?</a>
				</li> -->
				<!-- <li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/blog'} href="/blog">Blog</a>
				</li> -->
				<!-- <li class="hover:text-[#fffb00]">
					<a class:active={$page.url.pathname == '/contact'} href="https://madr.io/contact/"
						>Contact</a
					>
				</li> -->
				<!-- {#if userId}
					<li class="hover:text-[#fffb00]">
						<form method="POST">
							<button formaction="/logout" type="submit">Logout</button>
						</form>
					</li>
				{:else}
					<li class="hover:text-[#fffb00]">
						<a class:active={$page.url.pathname == '/login'} href="/login">Login</a>
					</li>
				{/if} -->
			<!-- </div>
			<li>
				<Hamburger bind:open={sidebar} />
			</li>
		</ul>
	</div>
</header> -->

<ul
	style="background-color: hsla(0, 0%, 0%, 0.5)"
	class="px-3 mt-2 flex justify-between sticky top-0 z-50 backdrop-blur-sm max-w-2xl sm:max-w-4xl mx-auto"
>
	<div class="hidden md:flex w-full justify-between items-center text-xl">
		<li><a on:click={toggle} href="https://madr.io/" aria-label="MaDr Logo"><LogoNav /></a></li>
		<li><a class:active={$page.url.pathname == '/about'} href="https://madr.io/about">about</a></li>
		<li><a class:active={$page.url.pathname == '/tech'} href="https://madr.io/tech">tech</a></li>
		<li><a class:active={$page.url.pathname == '/projects'} href="https://madr.io/projects">projects</a></li>
		<li><a class:active={$page.url.pathname == '/weather'} href="https://madr.io/weather">weather?</a></li>
		<li>
			<a class:active={$page.url.pathname == '/'} href="https://flirtatiousai.madr.io/">ai?</a>
		</li>
		<li><a class:active={$page.url.pathname == '/contact'} href="https://madr.io/contact">contact</a></li>
		<!-- {#if userId}
		<li>
			<form method="POST">
				<button formaction="/logout" type="submit">logout</button>
			</form>
		</li>
	{:else}
		<li><a class:active={$page.url.pathname == '/login'} href="/login">login</a></li>
	{/if} -->
	</div>
	<div />
	<li class=""><Hamburger bind:open={sidebar} /></li>
</ul>