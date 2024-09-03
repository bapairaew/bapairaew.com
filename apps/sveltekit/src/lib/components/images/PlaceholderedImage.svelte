<script lang="ts">
	import clsx from 'clsx';

	const { src, alt, placeholder, ...rest } = $props<{
		src: string;
		alt: string;
		placeholder?: string;
		class?: string;
	}>();

	let loaded = $state(!placeholder);

	let imageElement: HTMLImageElement;

	function onload() {
		loaded = true;
		imageElement.src = src;
	}
</script>

<!-- Make full image appear only when it is fully loaded instead of showing ugly default loading progress -->
<div class={clsx('overflow-hidden flex items-center', rest.class)}>
	<img
		bind:this={imageElement}
		class="min-h-full object-cover w-full h-full absolute top-0"
		loading="lazy"
		src={placeholder || src}
		{alt}
	/>
	{#if !loaded}
		<img
			aria-hidden="true"
			class="min-h-full object-cover w-full h-full absolute top-0"
			loading="lazy"
			{src}
			{alt}
			{onload}
		/>
	{/if}
</div>
