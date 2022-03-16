<script setup lang="ts">
const { login } = useAuth()

const userLogin = async () => {
    await login()
}
</script>

<template>
    <div>
        <button @click="userLogin">ログイン</button>
    </div>
</template>