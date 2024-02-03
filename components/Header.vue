<template>
  <header
    class="fixed z-100 w-full bg-green-500 md:bg-transparent h-16 flex justify-center"
  >
    <nav
      class="relative w-full md:w-4/5 max-w-xxl h-16 text-primary-text text-xl tracking-wide font-bold flex justify-between items-center"
    >
    <!-- w-[calc(100%-3rem)] -->
      <NuxtLink to="/" class="text-2xl relative inline-block group ml-5"
        >M.Gietka
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
        ></span>
      </NuxtLink>
      <div class="mr-5" v-auto-animate>
        <button class="md:hidden" @click="handleNavExpand" v-if="!isExpanded">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <button class="md:hidden" @click="handleNavExpand" v-if="isExpanded">
          <font-awesome-icon icon="fa-solid fa-times" />
        </button>
      </div>
      <ul
        class="absolute top-16 left-0 md:static flex flex-col md:flex-row w-full md:w-auto md:gap-5"
      >
        <li v-for="(link, index) in links" :key="index">
          <NuxtLink
            :to="link.to"
            class="flex justify-center items-center w-full md:w-auto py-4 md:relative inline-block group 
            bg-green-500 bg-opacity-20 md:bg-transparent
            border-b-2 border-green-400 md:border-none
            transition-all ease-in-out delay-300
            md:translate-y-0"
            :class="{ 'transform translate-y-[-50dvh]': !isExpanded }"
            :style="{ 'transition-delay': `calc(0.1s * ${isExpanded ? index : links.length - index})` }"
          >
            {{ link.name }}
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
export default {
  setup() {
    const isExpanded = ref(false);
    const links = [
      { name: "Stack", to: "/stack" },
      { name: "Experience", to: "/experience" },
      { name: "Education", to: "/education" },
      { name: "Projects", to: "/projects" },
    ];
    const handleNavExpand = () => {
      isExpanded.value = !isExpanded.value;
    };

    return {
      isExpanded,
      links,
      handleNavExpand,
    };
  },
};
</script>

<style lang="scss" scoped>
@for $i from 1 through 6 {
  .transitionDelay li:nth-child(#{$i}n) {
    animation-delay: #{$i * 0.5}s;
  }
}
</style>
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
