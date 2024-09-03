<script setup lang="ts">
const props = defineProps<{
  width: string;
  class?: string;
  alt: string;
  src: string;
}>();

const imageProps = {
  ...props,
  class: `absolute h-full w-full object-cover m0 ${props.class || ""}`,
};
</script>

<template>
  <div class="aspect-[4/3] relative">
    <NuxtImg v-bind="imageProps" loading="lazy" fit="fill" />
  </div>
</template>
