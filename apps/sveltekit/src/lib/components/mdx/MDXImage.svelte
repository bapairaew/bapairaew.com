<script lang="ts">
	import FilledImage from '$lib/components/images/FilledImage.svelte';
	import { getRemoteImagePath } from '$lib/data/image';

	export let src: string;
	export let alt: string;
	const defaultPlaceholderImage =
		'data:image/jpeg;base64,/9j/2wBDAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/2wBDAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAhioD/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=';
</script>

<figure>
	<FilledImage
		class="object-contain"
		src={getRemoteImagePath(src)}
		{alt}
		placeholder={defaultPlaceholderImage}
	/>
	<figcaption class="text-center">{alt}</figcaption>
</figure>
