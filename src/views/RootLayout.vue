<template>
  <a-layout class="w-full h-screen">
    <page-header />

    <a-layout class="h-full">
      <page-sider />

      <a-layout-content class="w-full p-4 overflow-auto">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
