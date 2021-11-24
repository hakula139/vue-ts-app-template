<template>
  <div>{{ helloMessage }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const helloMessage = ref('Hello, world!');

    return {
      helloMessage,
    };
  },
});
</script>
