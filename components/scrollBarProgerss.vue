<template>
    <UMeter 
    class="
    fixed z-99
    top-[3.95rem] md:top-[5rem] left-1 md:left-[5rem]
    w-[calc(100dvh-3.90rem)] md:w-[calc(100dvh-10rem)] 
    rotate-90 origin-top-left"
    :value="scrolledPercentage" />
</template>
<!-- rotate-90 -->

<script setup lang="ts">
const scrolledPercentage = ref(0);

const calculateScrollPercentage = () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  scrolledPercentage.value = (window.scrollY / scrollHeight) * 100;
};

onMounted(() => {
  calculateScrollPercentage();
  window.addEventListener("scroll", calculateScrollPercentage);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", calculateScrollPercentage);
});
</script>
