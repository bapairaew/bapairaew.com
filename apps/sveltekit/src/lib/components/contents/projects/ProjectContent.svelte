<script lang="ts">
	import MDXContent from '$lib/components/mdx/MDXContent.svelte';
	import type { Project } from '$lib/data/projects';

	export let project: Project;

	const tagsMap = project.tags.reduce(
		(map, tag) => {
			return { ...map, [tag.type]: [...(map[tag.type] || []), tag.text] };
		},
		{} as Record<string, string[]>
	);

	const techStack = [
		tagsMap['App type']?.join(' · '),
		tagsMap['Layer']?.join(' · '),
		[...(tagsMap['Framework'] || []), ...(tagsMap['Database'] || [])].join(' · '),
		tagsMap['Platform']?.join(' · '),
		tagsMap['Language']?.join(' · '),
		tagsMap['Other']?.join(' · ')
	]
		.filter((x) => x)
		.join(' / ');
</script>

<div class="prose lg:prose-md dark:prose-invert mx-auto">
	<span class="block pt-8 text-sm text-neutral-500 font-normal">
		{[project.year, tagsMap['Company']?.[0]].filter((x) => x).join(' · ')}
	</span>
	<h1 class="pt-4 m-0">{project.title}</h1>
	<span class="block pt-2 text-lg">{project.subtitle || ''}</span>
	<span class="block pt-4 text-sm text-neutral-500 font-normal">
		{techStack}
	</span>
	<div class="pt-4">
		<MDXContent content={project.content} />
	</div>
</div>
