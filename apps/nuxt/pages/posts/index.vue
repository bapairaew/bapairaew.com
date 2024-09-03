<script setup lang="ts">
useHead({
  title: "Posts",
  meta: [{ name: "description", content: "Some (random) thoughts on things." }],
});
</script>

<template>
  <NuxtLayout name="content">
    <ContentsPostsList />
  </NuxtLayout>
</template>
