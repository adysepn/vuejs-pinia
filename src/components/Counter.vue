<script setup>
import { useCounter } from '../store';

const counter = useCounter();

// Untuk mendengarkan perubahan yang terjadi pada state, mirip watch
counter.$subscribe((mutation, state) => {
    console.log(mutation);
    console.log(state);
})

counter.$onAction((action) => {
    console.log('ini action');
    console.log(action);  // Munculkan log ketika action dipanggil
})

function logDoubled() {
    console.log(counter.doubled);
}

// Untuk mengubah state store pada component
// function handleClick() {
//     counter.counter++;
// }
// function handleReset() {
//     counter.$patch({ // $patch(object) digunakan untuk mengubah state, bisa langsung ngubah banyak karena param nya object
//         counter:  0
//     })
// }
</script>

<template>
    <div>
        <h1>Counter: {{ counter.counter }}</h1>
        <button @click="counter.increment()">Increment</button>
        <button @click="counter.reset()">Reset</button>
        <button @click="logDoubled()">Log Doubled</button>
    </div>
</template>

<style scoped>
    
</style>