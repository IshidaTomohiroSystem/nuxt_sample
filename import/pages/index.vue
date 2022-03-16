<script setup>
const {logOut} = useAuth()
</script>

<template>
    <div>
        <p>hello</p>
        <span @click="logOut">ログイン中</span>
    </div>
</template>