import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { BASE_URL } from '@/configs';

const rootLayout = () => import('@/views/RootLayout.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Root',
    component: rootLayout,
  },
];

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
