<script setup lang="ts">
import type { Photo } from "~/utils/data/photos";
import dateformat from "dateformat";
import { getRemoteImagePath } from "~/utils/data/image";

const props = defineProps<{
  photo: Photo;
}>();

function formatDate(date: string | undefined) {
  return date ? dateformat(new Date(date), "dd mmm yyyy") : "";
}
</script>

<template>
  <CardsCard v-bind="$attrs">
    <ImagesFilledImage
      width="250"
      :alt="props.photo.place"
      :src="getRemoteImagePath(`/photos/${props.photo.slug}.jpeg`)"
    />
    <div class="p-2">
      <CardsCardOverlayAnchor :href="`/photography/${props.photo.slug}`">
        <h1 class="font-black">{{ props.photo.place }}</h1>
      </CardsCardOverlayAnchor>
      <p v-if="props.photo.date" class="text-neutral-500 text-sm">
        {{
          [formatDate(props.photo.date), props.photo.camera]
            .filter(Boolean)
            .join(" · ")
        }}
      </p>
    </div>
  </CardsCard>
</template>
