import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import RegisterStores from "./stores";
import { createPinia } from 'pinia';

import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(router);
RegisterStores();
app.mount('#app');