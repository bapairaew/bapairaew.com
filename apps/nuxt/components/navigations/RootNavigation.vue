<script lang="ts" setup>
import clsx from "clsx";
// @ts-ignore
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";

const rootNavBottomSheet = ref<InstanceType<typeof VueBottomSheet>>();

const openBottomSheet = () => {
  rootNavBottomSheet.value.open();
};

const closeBottomSheet = () => {
  rootNavBottomSheet.value.close();
};

const isAtTop = useIsAtTop();
const navs = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "Photography",
    href: "/photography",
  },
];

const navsReversed = computed(() => [...navs].reverse());

const activeLinkClassName = "no-underline text-neutral-900 dark:text-white";
const route = useRoute();
</script>

<template>
  <nav
    :class="
      clsx('p-4 sticky top-0 z-10', {
        'backdrop-blur-md': !isAtTop,
      })
    "
  >
    <div
      :class="
        clsx(
          'absolute top-0 left-0 w-full h-full transition-opacity opacity-0 bg-white dark:bg-black',
          isAtTop ? 'opacity-0' : 'opacity-60'
        )
      "
    />

    <div class="flex container mx-auto sticky">
      <div>
        <div class="text-2xl font-bold not-sr-only">
          <NuxtLink class="no-underline" href="/"> D: </NuxtLink>
        </div>
        <div class="sr-only">
          <NuxtLink class="no-underline" href="/"> Dom's website </NuxtLink>
        </div>
      </div>
      <ul
        class="flex-1 hidden justify-end items-center md:flex gap-4 no-underline text-neutral-500"
      >
        <li v-for="nav in navsReversed" :key="nav.href">
          <NuxtLink
            :to="nav.href"
            :class="
              clsx(
                route.path.replace(/\/$/, '') === nav.href.replace(/\/$/, '') &&
                  activeLinkClassName
              )
            "
          >
            {{ nav.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex-1 flex justify-end md:hidden">
        <button aria-label="open menu">
          <IconsHamburgerIcon @click="openBottomSheet" />
        </button>
      </div>
    </div>
  </nav>
  <client-only>
    <vue-bottom-sheet ref="rootNavBottomSheet">
      <nav>
        <ul
          class="px-4 py-6 flex flex-col gap-4 text-lg no-underline text-neutral-500"
          @click="closeBottomSheet"
        >
          <li v-for="nav in navs" :key="nav.href">
            <NuxtLink
              :to="nav.href"
              :class="
                clsx(
                  route.path.replace(/\/$/, '') ===
                    nav.href.replace(/\/$/, '') && activeLinkClassName
                )
              "
            >
              {{ nav.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </vue-bottom-sheet>
  </client-only>
</template>
