<script setup lang="ts">
import { getProjects } from "~/utils/data/projects";

const projects = await getProjects();
</script>

<template>
  <h1 class="text-3xl font-black px-4 py-4">Projects</h1>
  <ul class="grid grid-cols-1 gap-4 px-2 py-4 md:grid-cols-2 lg:grid-cols-4">
    <li v-for="project in projects" :key="project.slug">
      <ContentsProjectsProjectCard :project="project" />
    </li>
  </ul>
</template>
