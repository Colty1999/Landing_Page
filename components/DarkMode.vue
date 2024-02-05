<template>
    <UToggle
      on-icon="i-heroicons-sun-20-solid"
      off-icon="i-heroicons-moon-20-solid"
      :model-value="isDarkMode"
      @update:model-value="handleToggle"
      color="gray"
    />
</template>

<script setup lang="ts">
const isDarkMode = ref(false);

const setTheme = (value: boolean) => {
  const newTheme = value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);

  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('themeKey', newTheme);
  }
};

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const localStorageTheme = window.localStorage.getItem('themeKey');
    if (localStorageTheme) {
      isDarkMode.value = localStorageTheme === 'dark';
    } else {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode.value = prefersDarkMode;
    }
  }
};

const handleToggle = (value: boolean) => {
  isDarkMode.value = value;
  setTheme(value);
};

onMounted(() => {
  getInitialTheme();
  setTheme(isDarkMode.value);
});
</script>
