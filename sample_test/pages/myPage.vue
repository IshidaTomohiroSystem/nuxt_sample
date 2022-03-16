<script setup lang="ts">
    definePageMeta({
        middleware: 'auth',
    })
</script>

<template>
    <div>
        <h1>マイページ</h1>
        <NuxtLink to="/">
            <button>
                Go home
            </button>
        </NuxtLink>
    </div>
</template>