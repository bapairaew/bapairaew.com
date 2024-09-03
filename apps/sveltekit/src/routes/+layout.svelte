<script>
	import '../app.css';
	import RootNavigation from '$lib/components/navigations/RootNavigation.svelte';
	import { navigating, page } from '$app/stores';
	import LoadingNavigation from '$lib/components/navigations/LoadingNavigation.svelte';
</script>

{#if $navigating}
	<LoadingNavigation />
{/if}

<RootNavigation />
<slot />
<footer class="flex text-neutral-500 justify-end container mx-auto p-4">
	© {new Date().getFullYear()} Dom.
</footer>
