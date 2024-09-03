<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const max = 0.9;
	let progress = 0;

	onMount(() => {
		function tick() {
			const remaining = 1 - progress;
			progress += Math.random() * (0.2 * remaining);
			if (progress <= max) setTimeout(tick, 500 / remaining);
		}
		tick();
	});
</script>

<div class="fixed w-full h-1 z-50 bg-indigo-100" transition:fly={{ y: -10 }}>
	<div
		class="h-full shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ease-in-out"
		style="width: {progress * 100}%"
	></div>
</div>
