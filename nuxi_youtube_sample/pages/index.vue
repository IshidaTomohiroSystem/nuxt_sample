<script setup>
    import { ref } from 'vue';

    definePageMeta ({
            layout: "custom" // or default
        });

    const searchText = ref("")
    const myData = ref([]);

    async function searchForStuff(){
        const data = await fetch(`/api/helloSearch?search=${searchText.value}`)
        const json = await data.json()
        console.log("json", json)
        myData.value = json
    }

    //const { data } = await useFetch("/api/helloSearch?search=girls", 
    //{
    //    //pick:["score"]
    //})
    
    //const { data } = await useAsyncData('count', () => $fetch('/api/helloSearch?search=girls'))
</script>
<template>
    <div>
        <h1>
            Hello world
        </h1>
        <!--{{ data }}-->
        <form class="from" @submit.prevent="searchForStuff">
            <input type="text" v-model="searchText">
            <button>Search For Shows</button>
        </form>
        <div class="stuff">
            <div v-for="(show, index) in myData" :key="index">
                <img :src="show.show?.image?.medium" alt="" srcset="" />
            </div>
        </div>
        <img src="taco.jpg" alt="" srcset="" />
    </div>
</template>

<style scoped>
.stuff {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items:  center;
    flex-wrap: wrap;
    gap: 10px;
}
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
</style>