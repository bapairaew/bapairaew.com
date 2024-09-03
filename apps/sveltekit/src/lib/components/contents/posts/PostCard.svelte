<script lang="ts">
	import Card from '$lib/components/cards/Card.svelte';
	import CardOverlayAnchor from '$lib/components/cards/CardOverlayAnchor.svelte';
	import PostContent from '$lib/components/contents/posts/PostContent.svelte';
	import type { Post } from '$lib/data/posts';
	import dateformat from 'dateformat';
	export let post: Post;
</script>

<Card {...$$props}>
	<div class="p-4 flex flex-col h-full">
		<CardOverlayAnchor href={`/posts/${post.slug}`}>
			<h1 class="text-xl font-black pb-4">{post.title}</h1>
			<PostContent slot="dialog" {post} />
		</CardOverlayAnchor>
		<p class="pb-4 flex-grow">{post.description || ''}</p>
		<div class="flex justify-between w-full text-neutral-500 text-sm">
			<p>{dateformat(new Date(post.publishedTime), 'dd mmm yyyy')}</p>
			<span>Read more →</span>
		</div>
	</div>
</Card>
