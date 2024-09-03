<script setup lang="ts">
const links = [
  {
    name: "GitHub",
    href: "https://github.com/bapairaew",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ntechaval",
  },
  {
    name: "Email",
    href: "mailto:iam@bapairaew.com",
  },
];
</script>

<template>
  <section class="container relative mx-auto px-2 py-32">
    <div class="text-center">
      <h1 class="font-black text-7xl lg:text-8xl">Dom.</h1>
      <h2 class="text-2xl py-6">Software Engineer</h2>
      <ul class="links flex justify-center gap-4">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" target="_blank" rel="noopener noreferrer">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
    <div
      class="gradient opacity-50 -z-10 absolute top-0 left-0 w-full h-full"
    ></div>
  </section>
  <section
    class="container mx-auto px-4 pb-8 prose text-justify lg:prose-md dark:prose-invert"
  >
    <p>
      👋 This is Dom, a software engineer who’s been piecing together the tech
      puzzle for a good while now. I like to think of myself as someone who
      connects the dots and turns ideas into reality.
    </p>
    <p>
      But I’m not just about coding. I’m a problem solver at heart, and I love
      figuring things out, whether it’s tech-related or not. When I’m not
      working, I’m probably out exploring new places, trying different foods,
      and collecting stories from the people I meet.
    </p>
  </section>
</template>
