<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug as string;
</script>

<template>
  <NuxtLayout name="single">
    <NuxtLink
      class="block mt-4 text-neutral-500 max-w-prose mx-auto"
      to="/projects"
    >
      ← Projects
    </NuxtLink>
    <ContentsProjectsProjectContent :slug="slug" />
  </NuxtLayout>
</template>
