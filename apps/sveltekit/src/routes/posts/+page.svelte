<script lang="ts">
	import PostsList from '$lib/components/contents/posts/PostsList.svelte';
	export let data;
</script>

<svelte:head>
	<title>Posts | Dom.</title>
	<meta name="description" content="Some (random) thoughts on things." />
</svelte:head>

<PostsList posts={data.posts} />
