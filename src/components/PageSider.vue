<template>
  <a-layout-sider
    v-model:collapsed="siderData.collapsed"
    breakpoint="lg"
    collapsible
  >
    <a-menu
      v-model:selected-keys="siderData.selectedKeys"
      theme="dark"
      mode="inline"
    >
      <a-menu-item
        key="counter"
        @click="$router.push({ name: 'CounterPage' })"
      >
        <number-outlined />
        <span> Counter </span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const key = computed(() => route.path.split('/')[1]);

const siderData = reactive({
  collapsed: false,
  selectedKeys: [key.value],
});
</script>
