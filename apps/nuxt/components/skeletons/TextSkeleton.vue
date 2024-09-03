<script lang="ts" setup>
import clsx from "clsx";

const props = defineProps<{
  class?: string;
}>();

const computedClass = clsx(
  "animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-700 block w-3/6",
  props.class
);
</script>

<template>
  <span :class="computedClass">
    <span aria-hidden="true" class="invisible"> Loading </span>
  </span>
</template>
