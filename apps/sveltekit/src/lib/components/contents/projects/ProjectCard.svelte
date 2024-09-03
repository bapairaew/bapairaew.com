<script lang="ts">
	import Card from '$lib/components/cards/Card.svelte';
	import CardOverlayAnchor from '$lib/components/cards/CardOverlayAnchor.svelte';
	import ProjectContent from '$lib/components/contents/projects/ProjectContent.svelte';
	import BottomSheet from '$lib/components/modal/BottomSheet.svelte';
	import type { Project } from '$lib/data/projects';

	export let project: Project;
	const href = `/projects/${project.slug}`;
</script>

<Card>
	<div class="p-4">
		<CardOverlayAnchor {href}>
			<h1 class="text-xl font-black pb-2">{project.title}</h1>
			<ProjectContent slot="dialog" {project} />
		</CardOverlayAnchor>
		<p class="pb-2 text-sm text-neutral-500">{project.subtitle || ''}</p>
		<p class="truncate text-sm text-neutral-500">{project.tags.map((t) => t.text).join(' · ')}</p>
	</div>
</Card>
