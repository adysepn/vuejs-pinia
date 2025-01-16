import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useCounter = defineStore("counter", () => {
    const counter = ref(0);

    function increment() {
        counter.value++;
    }
    function reset() {
        counter.value = 0;
    }

    // Menggunakan computed agar apabila nilai tidak berubah maka tidak dipanggil kembali
    const doubled = computed(() => {
        console.log("computed value");
        return counter.value * 2;
    });

    return {
        counter,
        increment,
        reset,
        doubled
    };
});