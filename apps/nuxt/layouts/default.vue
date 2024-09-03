<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <NavigationsRootNavigation />
  <slot />
  <footer class="flex text-neutral-500 justify-end container mx-auto p-4">
    © {{ currentYear }} Dom.
  </footer>
</template>
