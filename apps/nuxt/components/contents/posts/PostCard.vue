<script setup lang="ts">
import type { Post } from "~/utils/data/posts";
import dateformat from "dateformat";

const props = defineProps<{
  post: Post;
}>();
</script>

<template>
  <CardsCard v-bind="$attrs">
    <div class="p-4 flex flex-col h-full">
      <CardsCardOverlayAnchor :href="`/posts/${props.post.slug}`">
        <h1 class="text-xl font-black pb-4">{{ props.post.title }}</h1>
      </CardsCardOverlayAnchor>
      <p class="pb-4 flex-grow">{{ props.post.description || "" }}</p>
      <div class="flex justify-between w-full text-neutral-500 text-sm">
        <p>
          {{ dateformat(new Date(props.post.publishedTime), "dd mmm yyyy") }}
        </p>
        <span>Read more →</span>
      </div>
    </div>
  </CardsCard>
</template>
