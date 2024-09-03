<script lang="ts">
	import clsx from 'clsx';
	import PlaceholderedImage from './PlaceholderedImage.svelte';
	export let src: string;
	export let alt: string;
	export let placeholder: string | undefined;
</script>

<div class="aspect-[4/3] relative">
	<PlaceholderedImage {src} {alt} {placeholder} class={clsx('m-0', $$props.class)} />
</div>
