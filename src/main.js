import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import Counter from './components/Counter.vue';
import ListTodo from './components/ListTodo.vue';
import AddTodo from './components/AddTodo.vue';
import UpdateTodo from './components/UpdateTodo.vue';

const pinia = createPinia();

const router = createRouter({
    routes: [
        {
            path: "/counter",
            component: Counter
        },
        {
            path: "/todolist",
            children:[
                {
                    path: "",
                    component: ListTodo,
                },
                {
                    path: "add",
                    component: AddTodo
                },
                {
                    name: "todo-edit",
                    path: ":id/edit",
                    component: UpdateTodo,
                    props: true
                }
            ]
        }
    ],
    history: createWebHistory()
})

createApp(App).use(pinia).use(router).mount('#app');