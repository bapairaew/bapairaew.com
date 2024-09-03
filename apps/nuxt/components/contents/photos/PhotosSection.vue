<script setup lang="ts">
import { getPhotos } from "~/utils/data/photos";

const photos = (await getPhotos()).slice(0, 8);
</script>

<template>
  <section class="container mx-auto px-2 py-8">
    <h2 class="font-black text-2xl pb-8">Photography</h2>
    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <li v-for="photo in photos" :key="photo.slug">
        <ContentsPhotosPhotoCard :photo="photo" />
      </li>
    </ul>
    <NuxtLink class="w-full text-center block p-4 mt-4" to="/photography">
      All photography →
    </NuxtLink>
  </section>
</template>
