<script lang="ts">
	import ProjectsList from '$lib/components/contents/projects/ProjectsList.svelte';
	export let data;
</script>

<svelte:head>
	<title>Projects | Dom.</title>
	<meta name="description" content="(Almost) every Dom's software projects." />
</svelte:head>

<ProjectsList projects={data.projects} />
