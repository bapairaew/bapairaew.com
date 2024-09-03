<script lang="ts">
	import ProjectCard from '$lib/components/contents/projects/ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';
	import ProjectCardLoading from './ProjectCardLoading.svelte';
	export let projects: Promise<Project[]>;
</script>

<h1 class="text-3xl font-black px-4 py-4">Projects</h1>
<ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
	{#await projects}
		{#each { length: 8 } as _, i}
			<li>
				<ProjectCardLoading />
			</li>
		{/each}
	{:then projects}
		{#each projects as project (project.slug)}
			<li>
				<ProjectCard {project} />
			</li>
		{/each}
	{/await}
</ul>
