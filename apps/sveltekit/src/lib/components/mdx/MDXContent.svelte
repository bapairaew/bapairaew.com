<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import remarkUnwrapImages from 'remark-unwrap-images';
	import MDXImage from './MDXImage.svelte';
	import MdxLink from './MDXLink.svelte';

	export let content: string;
	const plugins = [remarkUnwrapImages(), { renderer: { img: MDXImage, a: MdxLink } }] as any;
</script>

<Markdown md={content} {plugins} />
