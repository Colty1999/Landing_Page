<template>
    <div class="mt-7 max-w-sm mx-auto text-start">
        <p class="flex gap-6 items-end">
            <span class="mt-7 text-6xl font-bold">{{ error.statusCode }}</span>
            <span class="mt-7 text-5xl">Ooops.</span>
        </p>
        <p class="mt-1">{{ error.message }}</p>
        <button @click="handleGoBack" class="my-1 relative inline-block group">Go Home
            <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-text transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps(["error"]);

const handleGoBack = () => {
    clearError({ redirect: "/" });
};
</script>