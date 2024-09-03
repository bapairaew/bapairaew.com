<script setup lang="ts">
useHead({
  title: "Photography",
  meta: [{ name: "description", content: "Some taken (badly) photos." }],
});
</script>

<template>
  <NuxtLayout name="content">
    <ContentsPhotosList />
  </NuxtLayout>
</template>
