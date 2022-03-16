<script setup>
import vueGtagClient from '~~/plugins/vue-gtag.client';

    definePageMeta({
        title: 'My home page',
        layout: "default",
    })

    const route = useRoute()
    console.log(route.meta.title) // My home page

</script>

<template>
  <div>
    <h1>helloworld</h1> 
    <div>
        <h1>Home page</h1>
        <br />
        <NuxtLink to="/about">
            About (internal link that belongs to the Nuxt App)
        </NuxtLink>
        <br />
        <a href="https://nuxtjs.org">External Link to another page</a>
        <br />
        <NuxtLink to="/parent">
            Parent
        </NuxtLink>
        <br />
        <NuxtLink to="/parent/child">
            Parent Child
        </NuxtLink>
        <br />
        <NuxtLink to="/customLayout">
            Custom Layout
        </NuxtLink>
        <br />
        <NuxtLink to="/clientOnlyTest">
            Client Only Test
        </NuxtLink>
        <br />
        <NuxtLink to="/useFooTest">
            Use Foo Test
        </NuxtLink>
        <br />
        <NuxtLink to="/login">
            Login
        </NuxtLink>
        <br />
        <NuxtLink to="/logout">
            Logout
        </NuxtLink>
        <br />
        <NuxtLink to="/myPage">
            My Page
        </NuxtLink>
    </div>
  </div>
</template>
