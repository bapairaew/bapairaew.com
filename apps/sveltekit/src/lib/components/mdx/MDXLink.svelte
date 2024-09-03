<script lang="ts">
	export let href: string;

	const isExternal = href.startsWith('http');
</script>

{#if isExternal}
	<a {href} target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
{:else}
	<a {href}><slot /></a>
{/if}
