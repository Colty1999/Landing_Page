<template>
  <div>
    <!-- <header class="shadow-sm bg-tertiary text-secondary-text text-xl tracking-wider"> -->
    <header
      class="fixed z-100 w-full px-[10%] mx-auto text-primary-text text-xl tracking-wide font-bold"
    >
      <nav class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="text-2xl">M.Gietka</NuxtLink>
        <ul class="flex gap-5">
          <!-- <li><NuxtLink to="/">Home</NuxtLink></li> -->
          <li><NuxtLink to="/stack" class="btn">Stack</NuxtLink></li>
          <li><NuxtLink to="/experience" class="btn">Expierience</NuxtLink></li>
          <li><NuxtLink to="/education" class="btn">Education</NuxtLink></li>
          <li><NuxtLink to="/projects" class="btn">Projects</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto pt-16">
      <slot />
    </div>
    <footer
      class="fixed z-100 bottom-0 w-full px-[10%] h-16 text-primary-text  tracking-wider"
    >
      <div class="flex justify-start items-center h-full">
        <div class="flex gap-5">
          <a href="" class="btn"><font-awesome-icon icon="fa-brands fa-github" /></a>
          <a href="" class="btn"><font-awesome-icon icon="fa-brands fa-linkedin-in" /></a>
          | Created by Mateusz Gietka
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  /* text-shadow: -0.1rem -0.1rem 0 var(--primary), 0.1rem -0.1rem 0 var(--primary), -0.1rem 0.1rem 0 var(--primary), 0.1rem 0.1rem 0 var(--primary); */
}
</style>
