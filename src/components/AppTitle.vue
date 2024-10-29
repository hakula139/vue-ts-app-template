<template>
  <div class="font-sans text-4xl text-center">
    {{ props.msg }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string;
}>();
</script>
