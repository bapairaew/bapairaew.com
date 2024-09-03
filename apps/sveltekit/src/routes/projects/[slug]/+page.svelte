<script>
	import ProjectContent from '$lib/components/contents/projects/ProjectContent.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.project.title} | Dom.</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

<ProjectContent project={data.project} />
