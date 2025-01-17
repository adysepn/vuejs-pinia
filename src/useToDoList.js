import { defineStore } from "pinia";
import { reactive } from "vue";

export const useTodoList = defineStore('todo-list', () => {
    const todos = reactive([]);
    let id = 1; // Inisialisasi variabel id

    function add(name) {
        todos.push({ id: id++, name: name })
    }
    function get(id) {
        return todos.find(todo => todo.id === id)
    }
    function update(id, name) {
        const index = todos.findIndex(todo => todo.id === id)
        if (index !== -1) {
            todos[index].name = name
        }
    }
    function remove(id) {
        // findIndex() akan memenghasilkan nilai -1 apabila kondisi tidak terpenuhi
        const index = todos.findIndex(todo => todo.id === id) 
        if (index !== -1) {
            todos.splice(index, 1) // splice berfungsi untuk menghapus array pada index tertentu splice(index, deleteCount)
        }
    }
    return {
        todos,
        add,
        get,
        remove,
        update
    }
});