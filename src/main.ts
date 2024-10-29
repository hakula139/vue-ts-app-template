import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { store, key } from './store';
import './assets/index.css';

const app = createApp(App);

app //
  .use(router)
  .use(store, key)
  .mount('#app');
