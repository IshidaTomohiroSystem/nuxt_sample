<template>
    <div>
        <ClientOnly>
            <!-- this component will only be rendered on client side -->
            <h1>Mountains</h1>
            <h1 v-if="show" >Lazy</h1>
            <button v-if="!show" @click="show = true">Show List</button>

            <template #fallback>
            <!-- this will be rendered on server side -->
            <p>Loading comments...</p>
            </template>
        </ClientOnly>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>