<script lang="ts">
	import MDXContent from '$lib/components/mdx/MDXContent.svelte';
	import type { Post } from '$lib/data/posts';
	import dateformat from 'dateformat';

	export let post: Post;
</script>

<div class="prose lg:prose-md dark:prose-invert mx-auto">
	<h1 class="pt-8 m-0">{post.title}</h1>
	<span class="block pt-8 text-md text-neutral-500">
		{dateformat(new Date(post.publishedTime), 'dd mmm yyyy')} ·{' '}
		{post.keywords || ''}
	</span>
	<div class="pt-4">
		<MDXContent content={post.content} />
	</div>
</div>
