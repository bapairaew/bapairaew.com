<script setup lang="ts">
useHead({
  title: "Projects",
  meta: [
    { name: "description", content: "(Almost) every Dom's software projects." },
  ],
});
</script>

<template>
  <NuxtLayout name="content">
    <ContentsProjectsList />
  </NuxtLayout>
</template>
