<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useToDoList';
import { useRouter } from 'vue-router';

const name = ref("");
const todoList = useTodoList();
const router = useRouter();

function addTodo() {
    todoList.add(name.value);
    router.push("/todolist")
}
</script>

<template>
    <div>
        <h1>Add Todo</h1>
        <input v-model="name" placeholder="Enter Todo name" />
        <button @click="addTodo()">Add</button>
    </div>
</template>

<style scoped>
    
</style>