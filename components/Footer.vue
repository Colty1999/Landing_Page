<template>
  <footer
    class="
    fixed z-100 w-full bottom-0 h-12
    text-primary-text tracking-wider 
    flex justify-center items-center"
  >
  <div class="
  w-[calc(100%-3rem)] md:w-4/5 max-w-xxl h-12
  flex 
  justify-center md:justify-between gap-2
  text-sm md:text-base
  ">
    <div class="flex justify-center md:justify-start items-center gap-1">
        <a
          href="https://github.com/Colty1999"
          target="_blank"
          rel="noopener noreferrer"
          class="relative w-8 h-8 inline-flex items-center justify-center bg-transparent border-0.1 border-tertiary rounded-full text-tertiary no-underline overflow-hidden group"
        >
          <span
            class="z-10 relative transition duration-300 ease-in-out group-hover:text-secondary-text"
          >
            <font-awesome-icon icon="fa-brands fa-github" />
          </span>
          <span
            class="absolute top-0 left-0 w-full h-full bg-green-500 z-0 transform -translate-x-full transition duration-300 ease-in-out group-hover:translate-x-0"
          ></span>
        </a>
        <a
          href="https://www.linkedin.com/in/mgietka/"
          target="_blank"
          rel="noopener noreferrer"
          class="relative w-8 h-8 inline-flex items-center justify-center bg-transparent border-0.1 border-tertiary rounded-full text-tertiary no-underline overflow-hidden group"
        >
          <span
            class="z-10 relative transition duration-300 ease-in-out group-hover:text-secondary-text"
          >
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </span>
          <span
            class="absolute top-0 left-0 w-full h-full bg-green-500 z-0 transform -translate-x-full transition duration-300 ease-in-out group-hover:translate-x-0"
          ></span>
        </a>
        <span>| Created by Mateusz Gietka</span>
        <!-- Adjusted margin here -->
    </div>
    <div class="flex 
    justify-center md:justify-end 
    items-center gap-2">
    <p class="hidden md:flex">Change theme </p>|
    <DarkMode />
    </div>
  </div>
  </footer>
</template>
