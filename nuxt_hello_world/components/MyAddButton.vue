<script setup>
import {db} from "../firebase/firebase"
import { addDoc, collection, getDocs, query } from '@firebase/firestore';
import { computed, ref } from 'vue';
const addTodo = ref('');
const now = new Date();
const y = now.getFullYear();
const m = now.getMonth();
const d = now.getDate();
const createdAt = y + '/' + m + '/' + d;
const isInput = computed (() => addTodo.value.length > 0);

async function addTodoDatabase(db){
    const todosCol = query(collection(db, 'todos-item'));
    try {
        const results = [];
        let snapShot = await getDocs(todosCol);

        const todoRef = await addDoc(collection(db, 'todos-item'),{
            id: snapShot.docs.length,
            todoName: this.addTodo,
        });
    } 
    catch(e){
        console.log('Error getting user: ', e);
    }
}
function addTodoData(db){
    addTodoDatabase(db);//.then()
}
</script>

<template>
    <input v-model="addTodo">
    <button :disabled="!isInput" @click="addTodoDatabase(db)">追加</button>
</template>