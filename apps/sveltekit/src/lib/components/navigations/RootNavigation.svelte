<script lang="ts">
	import { page } from '$app/stores';
	import BottomSheet from '$lib/components/modal/BottomSheet.svelte';
	import HamburgerIcon from '$lib/components/icons/HamburgerIcon.svelte';
	let y: number;
	let dialogOpen = false;

	const navs = [
		{
			name: 'About',
			href: '/'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Posts',
			href: '/posts'
		},
		{
			name: 'Photography',
			href: '/photography'
		}
	];

	const navsReversed = [...navs].reverse();

	const onclose = () => {
		dialogOpen = false;
	};
</script>

<svelte:window bind:scrollY={y} />

<nav class:backdrop-blur-md={y > 0} class="p-4 sticky top-0 z-10">
	<div
		class:opacity-0={y == 0}
		class:opacity-80={y > 0}
		class="absolute top-0 left-0 w-full h-full transition-opacity opacity-0 bg-white dark:bg-black"
	></div>
	<div class="flex container mx-auto sticky">
		<div>
			<div class=" text-2xl font-bold not-sr-only"><a class="no-underline" href="/"> D:</a></div>
			<div class="sr-only"><a class="no-underline" href="/">Narudom's website</a></div>
		</div>
		<ul class="flex-1 hidden justify-end items-center md:flex gap-4 no-underline text-neutral-500">
			{#each navsReversed as nav (nav.href)}
				<li>
					<a href={nav.href} class:active={$page.url.pathname === nav.href}>{nav.name}</a>
				</li>
			{/each}
		</ul>
		<div class="flex-1 flex justify-end md:hidden">
			<button onclick={() => (dialogOpen = true)} aria-label="Open menu">
				<HamburgerIcon />
			</button>
		</div>
	</div>
</nav>
<BottomSheet open={dialogOpen} {onclose}>
	<div>
		<ul class="px-4 py-6 flex flex-col gap-4 text-lg no-underline text-neutral-500">
			{#each navsReversed as nav}
				<li>
					<a
						class="block"
						class:active={$page.url.pathname === nav.href}
						href={nav.href}
						onclick={() => (dialogOpen = false)}>{nav.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</BottomSheet>

<style lang="postcss">
	.active {
		@apply no-underline text-neutral-900 dark:text-white;
	}
</style>
