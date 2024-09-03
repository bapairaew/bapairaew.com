<script setup lang="ts">
import { VueMarkdownIt } from "@f3ve/vue-markdown-it";
// @ts-ignore
import miif from "markdown-it-implicit-figures";
import mirl from "markdown-it-replace-link";
import mila from "markdown-it-link-attributes";
import { getRemoteImagePath } from "~/utils/data/image";

defineProps<{ content: string }>();

const plugins: any[] = [
  [miif, { figcaption: true }],
  [
    mila,
    {
      matcher(href: string) {
        return href.startsWith("https:");
      },
      attrs: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  ],
  [
    mirl,
    {
      replaceLink: function (link: string) {
        if (link.startsWith("/images/")) {
          return getRemoteImagePath(link);
        }
        return link;
      },
    },
  ],
];
</script>

<template>
  <VueMarkdownIt :source="content" :plugins="plugins" />
</template>
