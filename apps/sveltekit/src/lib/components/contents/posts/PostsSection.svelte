<script lang="ts">
	import type { Post } from '$lib/data/posts';
	import PostCard from '$lib/components/contents/posts/PostCard.svelte';
	import PostCardLoading from './PostCardLoading.svelte';

	export let posts: Promise<Post[]>;
</script>

<section class="container mx-auto px-2 py-8">
	<h2 class="font-black text-2xl pb-8">Posts</h2>
	<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
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
	<a class="w-full text-center block p-4 mt-4" href="/posts">All posts →</a>
</section>
