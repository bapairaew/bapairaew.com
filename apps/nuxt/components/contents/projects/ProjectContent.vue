<script setup lang="ts">
import { getProjects } from "~/utils/data/projects";

const props = defineProps<{
  slug: string;
}>();

const [project] = await getProjects(props.slug);

const tagsMap = project.tags.reduce(
  (map, tag) => {
    return { ...map, [tag.type]: [...(map[tag.type] || []), tag.text] };
  },
  {} as Record<string, string[]>
);

const techStack = [
  tagsMap["App type"]?.join(" · "),
  tagsMap["Layer"]?.join(" · "),
  [...(tagsMap["Framework"] || []), ...(tagsMap["Database"] || [])].join(" · "),
  tagsMap["Platform"]?.join(" · "),
  tagsMap["Language"]?.join(" · "),
  tagsMap["Other"]?.join(" · "),
]
  .filter((x) => x)
  .join(" / ");

useHead({
  title: project.title,
  meta: [
    {
      name: "description",
      content: project.description,
    },
  ],
});
</script>

<template>
  <div class="prose lg:prose-md dark:prose-invert mx-auto">
    <span class="block pt-8 text-sm text-neutral-500 font-normal">
      {{ [project.year, tagsMap["Company"]?.[0]].filter((x) => x).join(" · ") }}
    </span>
    <h1 class="pt-4 m-0">{{ project.title }}</h1>
    <span class="block pt-2 text-lg">{{ project.subtitle || "" }}</span>
    <span class="block pt-4 text-sm text-neutral-500 font-normal">
      {{ techStack }}
    </span>
    <div class="pt-4">
      <MDXContent :content="project.content">
        <template #fallback>
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
