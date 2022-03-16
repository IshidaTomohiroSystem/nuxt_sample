<script setup lang="ts">
const { logout } = useAuth()

const userLogout = async () => {
    await logout()
}
</script>

<template>
    <div>
        <button @click="userLogout">ログアウト</button>
    </div>
</template>