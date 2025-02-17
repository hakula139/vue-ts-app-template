import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const localCount = localStorage.getItem('count');
  const initialCount = localCount ? Number(JSON.parse(localCount)) : 0;
  const count = ref(initialCount);

  const increment = () => {
    count.value++;
    localStorage.setItem('count', JSON.stringify(count.value));
  };

  return {
    count,
    increment,
  };
});
