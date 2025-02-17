<template>
  <app-title msg="Hello, World!" />

  <div id="counter">
    <p>Counter: {{ store.count }}</p>
    <button
      type="button"
      class="button"
      @click="store.increment"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores';

const store = useCounterStore();
</script>

<style scoped>
@reference "../assets/index.css";

.button {
  @apply text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500;
}
</style>
