<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoList } from '../useToDoList';

const {id} = defineProps(["id"]);
const router = useRouter();
const todoList = useTodoList();

const name = ref(todoList.get(Number(id)).name);

function addTodo() {
    todoList.update(Number(id), name.value);
    router.push('/todolist')
}
</script>

<template>
    <h1>Edit Todo</h1>
    <input v-model="name" placeholder="Masukkan todo">
    <button @click="addTodo()">Update</button>
</template>

<style scoped>
    
</style>