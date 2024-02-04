<template>
  <div
    class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-dvh mx-auto pt-16 pb-12"
    v-auto-animate
  >
    <div class="flex justify-center items-center">
      <NuxtImg
        src="/img/profilePic.jpg"
        class="rounded-2xl object-cover object-[25%_25%] w-[60%] h-[80%] shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] shadow-background transition-all duration-300 ease-in-out"
        :class="imageLoaded ? 'scale-100' : 'scale-0'"
        :placeholder="[50, 25, 75, 5]"
        quality="80"
        loading="lazy"
        @load="doSomethingOnLoad"
      />
      <!-- preload -->
      <!-- loading="lazy" -->
      <!-- sizes="100vw sm:50vw md:400rem" -->
      <!-- https://blog.logrocket.com/styling-css-box-shadow-property/ -->
    </div>
    <div class="flex justify-center items-center text-primary-text">
      <div class="w-[60%]">
        <h1>Hello, my name is Mateusz.</h1>
        <p>
          I am an enginner with bachelors degree in Automatics and Robotics
          currently doing my masters studies in Computer Science at the Warsaw
          University of Technology. I am fascinated in innovative technologies
          and ways to make the abstract ideas come to life. My main skillset is
          based on web development experiences I have obtained during my
          professional work and general programming knowledge i gained during my
          studies and free time projects.
        </p>
        <!-- <font-awesome-icon :icon="['fas', 'chevron-down']" /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imageLoaded = ref(false);
const doSomethingOnLoad = () => {
    imageLoaded.value = true;
};
</script>
