import { createRouter, createWebHistory } from 'vue-router';

import { VITE_APP_TITLE } from '@/configs';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'Root',
      meta: { title: 'Home' },
      component: () => import('@/views/RootLayout.vue'),
      redirect: { name: 'CounterPage' },
      children: [
        {
          path: 'counter',
          name: 'CounterPage',
          meta: { title: 'Counter' },
          component: () => import('@/views/CounterPage.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title as string} - ${VITE_APP_TITLE}`;
  next();
});

export default router;
