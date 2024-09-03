<script setup lang="ts">
import type { Project } from "~/utils/data/projects";

const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <CardsCard v-bind="$attrs">
    <div class="p-4">
      <CardsCardOverlayAnchor :to="`/projects/${props.project.slug}`">
        <h1 class="text-xl font-black pb-2">{{ props.project.title }}</h1>
      </CardsCardOverlayAnchor>
      <p class="pb-2 text-sm text-neutral-500">
        {{ props.project.subtitle || "" }}
      </p>
      <p class="truncate text-sm text-neutral-500">
        {{ props.project.tags.map((t) => t.text).join(" · ") }}
      </p>
    </div>
  </CardsCard>
</template>
