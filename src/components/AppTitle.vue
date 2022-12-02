<template>
  <h1>{{ props.msg }}</h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>();
</script>

<style scoped>
h1 {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Emoji, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
