<template>
  <div>
    <div class="w-full md:w-4/5 max-w-xxl mx-auto h-[200dvh]">
      <slot />
    </div>
    <ScrollBarProgerss />
    <Header />
    <Footer />
    <!-- <div class="
    absolute z-[-1] 
    bottom-[-50dvh] right-[-50dvh] w-[100dvw] h-[100dvh] 
    bg-green-500 
    transform -rotate-[30deg]
    opacity-50
    "/> -->
    <!-- <div class="
    fixed z-[-1] 
    bottom-[-55dvh] right-[-55dvw] w-[100dvw] h-[100dvh] 
    bg-green-500 
    transform -rotate-[30deg]
    opacity-50
    "/>
    <div class="
    fixed z-[-1] 
    bottom-[-60dvh] right-[-60dvw] w-[100dvw] h-[100dvh] 
    bg-green-500 
    transform -rotate-[30deg]
    opacity-50
    "/> -->
    <!-- TODO square scaling sm:w-12 sm:h-12 md:w-8 md:h-8 -->
  </div>
</template>