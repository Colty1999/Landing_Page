<template>
    <UToggle
      on-icon="i-heroicons-sun-20-solid"
      off-icon="i-heroicons-moon-20-solid"
      :model-value="isDarkMode"
      @update:model-value="handleToggle"
      color="gray"
    />
</template>

<script lang="ts">
export default {
  setup() {
    const getInitialTheme = () => {
      if (typeof window !== "undefined") {
        const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (window.localStorage) {
          const localStorageTheme = window.localStorage.getItem("themeKey");
          if (localStorageTheme) {
            return localStorageTheme === "dark";
          }
        }
        return prefersDarkMode;
      }
      return false;
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
