<template>
    <NuxtLayout name="custom">
        <template #header> Some header template content. </template>

        The rest of the page
        <button @click="enableCustomLayout">Update layout</button>
    </NuxtLayout>
</template>

<script setup>
const route = useRoute()
    function enableCustomLayout () {
        route.meta.layout = "default"
    }
    definePageMeta({
        layout: false,
    });
</script>
