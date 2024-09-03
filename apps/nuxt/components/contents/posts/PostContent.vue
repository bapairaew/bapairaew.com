<script setup lang="ts">
import { getPosts } from "~/utils/data/posts";
import dateformat from "dateformat";

const props = defineProps<{
  slug: string;
}>();

const [post] = await getPosts(props.slug);

useHead({
  title: post.title,
  meta: [
    {
      name: "description",
      content: post.description,
    },
  ],
});
</script>

<template>
  <div class="prose lg:prose-md dark:prose-invert mx-auto">
    <h1 class="pt-8 m-0">{{ post.title }}</h1>
    <span class="block pt-8 text-md text-neutral-500">
      {{ dateformat(new Date(post.publishedTime), "dd mmm yyyy") }} ·{{ " " }}
      {{ post.keywords || "" }}
    </span>
    <div class="pt-4">
      <MDXContent :content="post.content">
        <template #fallback>
          <p>
            <SkeletonsTextSkeleton className="w-full" />
          </p>
          <p>
            <SkeletonsTextSkeleton className="w-full" />
          </p>
          <p>
            <SkeletonsTextSkeleton className="w-full" />
          </p>
        </template>
      </MDXContent>
    </div>
  </div>
</template>
