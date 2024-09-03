<script>
	import PhotoContent from '$lib/components/contents/photos/PhotoContent.svelte';
	import dateformat from 'dateformat';

	export let data;
</script>

<svelte:head>
	<title>{data.photo.place} | Dom.</title>
	<meta
		name="description"
		content={[
			data.photo.place,
			data.photo.date && dateformat(new Date(data.photo.date), 'dd mmm yyyy'),
			data.photo.camera
		]
			.filter((x) => x)
			.join(' · ')}
	/>
</svelte:head>

<PhotoContent photo={data.photo} />
