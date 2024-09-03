<script lang="ts">
	import Card from '$lib/components/cards/Card.svelte';
	import CardOverlayAnchor from '$lib/components/cards/CardOverlayAnchor.svelte';
	import FilledImage from '$lib/components/images/FilledImage.svelte';
	import type { Photo } from '$lib/data/photos';
	import dateformat from 'dateformat';
	import PhotoContent from './PhotoContent.svelte';
	import { getRemoteImagePath } from '$lib/data/image';
	export let photo: Photo;
</script>

<Card {...$$props}>
	<FilledImage
		className="object-cover"
		alt={photo.place}
		src={getRemoteImagePath(`/photos/${photo.slug}.jpeg`)}
		placeholder={photo.blurDataURL}
	/>
	<div class="p-2">
		<CardOverlayAnchor href={`/photography/${photo.slug}`}>
			<h1 class="font-black">{photo.place}</h1>
			<PhotoContent slot="dialog" {photo} />
		</CardOverlayAnchor>
		{#if photo.date}
			<p class="text-neutral-500 text-sm">
				{[dateformat(new Date(photo.date), 'dd mmm yyyy'), photo.camera]
					.filter((x) => x)
					.join(' · ')}
			</p>
		{/if}
	</div>
</Card>
