<script setup lang="ts">
import { getPosts } from "~/utils/data/posts";

const posts = await getPosts();
</script>

<template>
  <h1 class="text-3xl font-black px-4 py-4">Posts</h1>
  <ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="post in posts" :key="post.slug">
      <ContentsPostsPostCard :post="post" />
    </li>
  </ul>
</template>
