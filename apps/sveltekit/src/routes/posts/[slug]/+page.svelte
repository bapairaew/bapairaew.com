<script>
	import PostContent from '$lib/components/contents/posts/PostContent.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.post.title} | Dom.</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<PostContent post={data.post} />
