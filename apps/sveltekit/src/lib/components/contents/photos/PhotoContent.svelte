<script lang="ts">
	import FilledImage from '$lib/components/images/FilledImage.svelte';
	import { getRemoteImagePath } from '$lib/data/image';
	import type { Photo } from '$lib/data/photos';
	import dateformat from 'dateformat';

	export let photo: Photo;
</script>

<FilledImage
	class="object-cover"
	alt={photo.place}
	src={getRemoteImagePath(`/photos/${photo.slug}.jpeg`)}
	placeholder={photo.blurDataURL}
/>
<h1 class="mt-8 text-xl font-black">{photo.place}</h1>
<dl class="grid grid-cols-2 gap-2 mt-4">
	{#if photo.date}
		<div>
			<dt class="text-sm text-neutral-500">Date</dt>
			<dd>{dateformat(new Date(photo.date), 'dd mmm yyyy')}</dd>
		</div>
	{/if}
	<div>
		<dt class="text-sm text-neutral-500">Camera</dt>
		<dd>{photo.camera}</dd>
	</div>
	<div>
		<dt class="text-sm text-neutral-500">Aperture</dt>
		<dd>ƒ / {photo.fnumber}</dd>
	</div>
	<div>
		<dt class="text-sm text-neutral-500">Exposure Time</dt>
		<dd>1 / {(1 / photo.exposureTime).toFixed(0)}</dd>
	</div>
	<div>
		<dt class="text-sm text-neutral-500">Focal Length</dt>
		<dd>{photo.focalLength.toFixed(1)} mm</dd>
	</div>
	<div>
		<dt class="text-sm text-neutral-500">ISO</dt>
		<dd>{photo.iso}</dd>
	</div>
</dl>
