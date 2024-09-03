<script setup lang="ts">
import { getPosts } from "~/utils/data/posts";

const posts = (await getPosts()).slice(0, 6);
</script>

<template>
  <section class="container mx-auto px-2 py-8">
    <h2 class="font-black text-2xl pb-8">Posts</h2>
    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <li v-for="post in posts" :key="post.slug">
        <ContentsPostsPostCard :post="post" />
      </li>
    </ul>
    <NuxtLink class="w-full text-center block p-4 mt-4" to="/posts">
      All posts →
    </NuxtLink>
  </section>
</template>
