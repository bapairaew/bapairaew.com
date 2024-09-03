<script setup lang="ts">
import { getPhotos } from "~/utils/data/photos";
import dateformat from "dateformat";
import { getRemoteImagePath } from "~/utils/data/image";

const props = defineProps<{
  slug: string;
}>();

const [photo] = await getPhotos(props.slug);

useHead({
  title: photo.place,
  meta: [
    {
      name: "description",
      content: [
        photo.place,
        photo.date && dateformat(new Date(photo.date), "dd mmm yyyy"),
        photo.camera,
      ]
        .filter((x) => x)
        .join(" · "),
    },
  ],
});
</script>

<template>
  <ImagesFilledImage
    width="1000"
    :alt="photo.place"
    :src="getRemoteImagePath(`/photos/${photo.slug}.jpeg`)"
  />
  <h1 class="mt-8 text-xl font-black">{{ photo.place }}</h1>
  <dl class="grid grid-cols-2 gap-2 mt-4">
    <div v-if="photo.date">
      <dt class="text-sm text-neutral-500">Date</dt>
      <dd>{{ dateformat(new Date(photo.date), "dd mmm yyyy") }}</dd>
    </div>
    <div>
      <dt class="text-sm text-neutral-500">Camera</dt>
      <dd>{{ photo.camera }}</dd>
    </div>
    <div>
      <dt class="text-sm text-neutral-500">Aperture</dt>
      <dd>ƒ / {{ photo.fnumber }}</dd>
    </div>
    <div>
      <dt class="text-sm text-neutral-500">Exposure Time</dt>
      <dd>1 / {{ (1 / photo.exposureTime).toFixed(0) }}</dd>
    </div>
    <div>
      <dt class="text-sm text-neutral-500">Focal Length</dt>
      <dd>{{ photo.focalLength.toFixed(1) }} mm</dd>
    </div>
    <div>
      <dt class="text-sm text-neutral-500">ISO</dt>
      <dd>{{ photo.iso }}</dd>
    </div>
  </dl>
</template>
