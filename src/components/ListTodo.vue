<script setup>
import { useTodoList } from '../useToDoList';

const todoList = useTodoList();
</script>

<template>
    <h1>List Todo</h1>
    <router-link to="/todolist/add">Add Todo</router-link>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todoList.todos" :key="todo.id">
                <td>{{ todo.id }}</td>
                <td>{{ todo.name }}</td>
                <td>
                    <router-link :to="{name: 'todo-edit', params: {id: todo.id}}">Edit</router-link>
                    <button @click="todoList.remove(todo.id)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    
</style>