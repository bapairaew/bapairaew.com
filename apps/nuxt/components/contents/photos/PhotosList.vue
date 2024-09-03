<script setup lang="ts">
import { getPhotos } from "~/utils/data/photos";

const photos = await getPhotos();
</script>

<template>
  <h1 class="text-3xl font-black px-4 py-4">Photography</h1>
  <ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
    <li v-for="photo in photos" :key="photo.slug">
      <ContentsPhotosPhotoCard :photo="photo" />
    </li>
  </ul>
</template>
