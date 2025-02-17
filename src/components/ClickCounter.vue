<template>
  <div class="counter">
    <a-space>
      <span class="whitespace-nowrap"> Counter: {{ store.count }} </span>
      <a-button
        shape="circle"
        size="small"
        @click="store.increment"
      >
        +
      </a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores';

const store = useCounterStore();
</script>
