<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();

const computedClass = clsx(
  'before:content-[""] before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:absolute no-underline',
  props.class
);
</script>

<template>
  <NuxtLink v-bind="$attrs" :class="computedClass">
    <slot />
  </NuxtLink>
</template>
