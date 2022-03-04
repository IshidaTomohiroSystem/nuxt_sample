<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import MyAddButton from './components/MyAddButton.vue';

</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    <Header title="To do List" />
    <Todos />
    <MyAddButton />
  </div>
</template>
<style>
.logo {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>