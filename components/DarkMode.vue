<template>
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
