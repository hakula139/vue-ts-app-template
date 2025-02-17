<template>
  <div class="counter">
    <a-flex
      align="center"
      gap="middle"
    >
      <span class="text-4xl whitespace-nowrap"> {{ store.count }} </span>
      <a-button
        shape="circle"
        @click="store.increment"
      >
        +
      </a-button>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores';

const store = useCounterStore();
</script>
