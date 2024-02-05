<template>
  <div
    class="grid grid-rows-2 md:grid-rows-10 md:grid-cols-2 h-dvh mx-auto pt-16 pb-12 text-primary-text"
  >
    <div class="flex justify-center items-center md:col-span-1 md:row-span-10">
      <div class="w-[20dvw] h-[45dvh]">
        <NuxtImg
          src="/img/profilePic.jpg"
          class="rounded-2xl object-cover object-[25%_25%] w-full h-full shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] shadow-background transition-all duration-300 ease-in-out"
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
    </div>
    <div class="flex justify-center items-center md:col-span-1 md:row-span-10">
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
      </div>
    </div>
    <div
      class="flex justify-center items-center md:col-span-2 md:row-span-1 text-4xl"
    >
      <button class="hover:scale-[1.2] transition-all duration-300 ease-in-out">
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const imageLoaded = ref(false);
const doSomethingOnLoad = () => {
  imageLoaded.value = true;
  // TODO animation on load
};
</script>
