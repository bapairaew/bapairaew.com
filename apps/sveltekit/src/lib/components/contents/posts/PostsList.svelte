<script lang="ts">
	import PostCard from '$lib/components/contents/posts/PostCard.svelte';
	import type { Post } from '$lib/data/posts';
	import PostCardLoading from './PostCardLoading.svelte';
	export let posts: Promise<Post[]>;
</script>

<h1 class="text-3xl font-black px-4 py-4">Posts</h1>
<ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-3">
	{#await posts}
		{#each { length: 6 } as _, i}
			<li>
				<PostCardLoading />
			</li>
		{/each}
	{:then posts}
		{#each posts as post (post.slug)}
			<li>
				<PostCard {post} />
			</li>
		{/each}
	{/await}
</ul>
