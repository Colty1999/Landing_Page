<template>
  <header class="fixed z-100 
  w-full 
  bg-green-500 md:bg-transparent h-16 
  flex justify-center">
    <nav
      class="w-[calc(100%-3rem)] md:w-4/5 max-w-xxl h-16
      text-primary-text text-xl tracking-wide font-bold 
      flex justify-between items-center"
    >
      <NuxtLink to="/" class="text-2xl relative inline-block group"
        >M.Gietka
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
        ></span>
      </NuxtLink>
      <div v-auto-animate>
        <button class="md:hidden" @click="handleNavExpand" v-if="!isExpanded">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <button class="md:hidden" @click="handleNavExpand" v-if="isExpanded">
          <font-awesome-icon icon="fa-solid fa-times" />
        </button>
      </div>
      <ul class="hidden md:flex gap-5">
        <li>
          <NuxtLink to="/stack" class="relative inline-block group"
            >Stack
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience" class="relative inline-block group"
            >Expierience
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/education" class="relative inline-block group"
            >Education
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="relative inline-block group"
            >Projects
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { screenWidthConsts } from "~/constants";
export default {
  setup() {
    const isSmallScreen = ref(
      process.client ? window.innerWidth < screenWidthConsts.md : false
    );
    const isExpanded = ref(false);
    const expandStyles = computed(() => {
      return isSmallScreen.value ? "block" : "hidden";
    });
    const handleNavExpand = () => {
      isExpanded.value = !isExpanded.value;
    };

    const handleResize = () => {
      isSmallScreen.value = process.client
        ? window.innerWidth < screenWidthConsts.md
        : false;
    };

    // Add resize event listener when the component is mounted
    onMounted(() => {
      if (process.client) {
        window.addEventListener("resize", handleResize);
      }
    });

    // Remove resize event listener when the component is about to be unmounted
    onBeforeUnmount(() => {
      if (process.client) {
        window.removeEventListener("resize", handleResize);
      }
    });

    return {
      isSmallScreen,
      isExpanded,
      handleNavExpand,
    };
  },
};
</script>

<!-- <template>
  <header>
    <nav class="fixed z-100 w-4/5 max-w-xxl text-primary-text text-xl tracking-wide font-bold flex justify-between items-center h-16">
      <NuxtLink to="/" class="text-2xl relative inline-block group">M.Gietka
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
      </NuxtLink>
      <ul class="flex gap-5">
        <li>
          <NuxtLink to="/stack" class="relative inline-block group">Stack
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experience" class="relative inline-block group">Expierience
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/education" class="relative inline-block group">Education
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="relative inline-block group">Projects
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template> -->
