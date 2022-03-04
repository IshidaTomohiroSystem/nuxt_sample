<script setup>
import {db} from "../firebase/firebase"
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { reactive } from "@vue/reactivity";
import { onUnmounted } from "@vue/runtime-core";
// Get a list of cities from your database
async function getTodos(db, todos) {
  const todosCol = query(collection(db, 'todos-item'),orderBy('id', 'asc'));
  try {
    const results = [];
    const snapShot = onSnapshot(todosCol,(QuerySnapshot) =>{
      QuerySnapshot.docChanges().forEach((change)=>{
        if (change.type === "added"){
          todos.push({
            ...change.doc.data(), firebaseId:change.doc.id
          });
        }
        if (change.type === "removed"){
          todos.forEach(function(todo, index){
            if(todo.firebaseId === change.doc.id){
              todos.splice(index, 1);
            }
          });
        };
      });
    });
    onUnmounted(snapShot);
    return results;
  } catch(e) {
    console.log('Error getting user: ', e);
  }
}
const todos = reactive([]);
getTodos(db, todos).then();
console.log(todos);

async function deleteTodos(db, id){
  await deleteDoc(doc(db, 'todos-item', id));
}
</script>

<template>
    <div v-for="todo in todos" v-bind:key="todo.id" class="todos">
        <h3>{{todo.todoName}}</h3>
        <p>{{todo.id}}</p>
        <p>{{todo.firebaseId}}</p>
        <button @click="deleteTodos(db, todo.firebaseId)">削除</button>
    </div>
</template>
<style scoped>
.todos{
    box-shadow: 0 10px 25px 0 rgba(219, 38, 38, 0.1);
}
</style>