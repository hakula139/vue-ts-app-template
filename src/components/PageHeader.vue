<template>
  <a-layout-header class="sticky top-0 z-50 !px-4">
    <a-flex
      class="h-full"
      justify="space-between"
      align="center"
    >
      <router-link
        class="text-2xl !text-white"
        :to="{ name: 'Root' }"
      >
        My App
      </router-link>
    </a-flex>
  </a-layout-header>
</template>
