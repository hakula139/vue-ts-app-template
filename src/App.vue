<template>
  <router-view />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

import { useStore } from '@/store';

const store = useStore();

onBeforeMount(() => {
  store.commit('initStore');
});
</script>
