import { createApp, type Component } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import './assets/index.css';

const app = createApp(App as Component);

app //
  .use(router)
  .use(createPinia())
  .mount('#app');
