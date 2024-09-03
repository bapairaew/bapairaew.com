<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug as string;
</script>

<template>
  <NuxtLayout name="single">
    <NuxtLink class="block my-4 text-neutral-500" to="/photography">
      ← Photography
    </NuxtLink>
    <ContentsPhotosPhotoContent :slug="slug" />
  </NuxtLayout>
</template>
