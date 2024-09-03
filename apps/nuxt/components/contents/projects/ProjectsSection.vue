<script setup lang="ts">
import { getProjects } from "~/utils/data/projects";

const projects = (await getProjects()).slice(0, 8);
</script>

<template>
  <section class="container mx-auto px-2 py-8">
    <h2 class="font-black text-2xl pb-8">Projects</h2>
    <ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <li v-for="project in projects" :key="project.slug">
        <ContentsProjectsProjectCard :project="project" />
      </li>
    </ul>
    <NuxtLink class="w-full text-center block p-4 mt-4" to="/projects">
      All projects →
    </NuxtLink>
  </section>
</template>
