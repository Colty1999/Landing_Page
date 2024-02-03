<template>
  <footer
    class="fixed z-100 w-4/5 max-w-xxl bottom-0 h-12 text-primary-text tracking-wider flex justify-between items-center"
  >
    <div class="flex justify-start">
      <div class="flex gap-1 items-center">
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
        <span class="ml-2">| Created by Mateusz Gietka</span>
        <!-- Adjusted margin here -->
      </div>
    </div>
    <div class="flex items-center gap-1">
      Change theme |
    <UToggle
      on-icon="i-heroicons-sun-20-solid"
      off-icon="i-heroicons-moon-20-solid"
      :model-value="isDarkMode"
      @update:model-value="handleToggle"
      color="gray"
    />
  </div>
  </footer>
</template>

<script lang="ts">
export default {
  setup() {
    const getInitialTheme = () => {
      if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage.getItem("themeKey") === "dark";
      }
      return false; // Default theme is light if localStorage is not available
    };

    const isDarkMode = ref(getInitialTheme());

    const handleToggle = (value: any) => {
      isDarkMode.value = value;
      const newTheme = value ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      if (window.localStorage) {
        window.localStorage.setItem("themeKey", newTheme);
      }
    };

    return {
      isDarkMode,
      handleToggle,
    };
  },
};
</script>
