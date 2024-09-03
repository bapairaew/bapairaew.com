<script lang="ts">
	import HeroSection from '$lib/components/contents/hero/HeroSection.svelte';
	import PhotosSection from '$lib/components/contents/photos/PhotosSection.svelte';
	import PostsSection from '$lib/components/contents/posts/PostsSection.svelte';
	import ProjectsSection from '$lib/components/contents/projects/ProjectsSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Dom.</title>
	<meta name="description" content="Some random website." />
</svelte:head>

<HeroSection />
<ProjectsSection projects={data.projects} />
<PostsSection posts={data.posts} />
<PhotosSection photos={data.photos} />
