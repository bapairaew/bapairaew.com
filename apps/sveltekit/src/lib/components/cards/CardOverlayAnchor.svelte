<script lang="ts">
	import { pushState } from '$app/navigation';
	import BottomSheet from '../modal/BottomSheet.svelte';
	export let href: string;
	let dialogOpen = false;

	function onclick(e: any) {
		e.preventDefault();
		pushState(href, {});
		dialogOpen = true;
	}

	function onclose() {
		dialogOpen = false;
		history.back();
	}
</script>

<a
	{...$$props}
	class={`before:content-[''] before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:absolute no-underline ${$$props.class}`}
	{href}
	{onclick}
>
	<slot />
</a>
{#if dialogOpen}
	<BottomSheet {onclose} open={dialogOpen}>
		<slot name="dialog" />
	</BottomSheet>
{/if}
