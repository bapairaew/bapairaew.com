<script lang="ts">
	import PhotosList from '$lib/components/contents/photos/PhotosList.svelte';
	export let data;
</script>

<svelte:head>
	<title>Photos | Dom.</title>
	<meta name="description" content="Some taken (badly) photos." />
</svelte:head>

<PhotosList photos={data.photos} />
