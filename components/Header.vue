<template>
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
</template>

<style scoped>/* .router-link-exact-active {
  text-shadow: -0.1rem -0.1rem 0 var(--primary), 0.1rem -0.1rem 0 var(--primary), -0.1rem 0.1rem 0 var(--primary), 0.1rem 0.1rem 0 var(--primary);
} */</style>
