import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  MdDarkmodeOutlined,
  MdDarkmode,
  HiSolidSearch,
  CoArrowLeft,
} from 'oh-vue-icons/icons';

addIcons(MdDarkmodeOutlined, MdDarkmode, HiSolidSearch, CoArrowLeft);

import './assets/styles/main.scss';

createApp(App)
  .use(store)
  .use(router)
  .component('v-icon', OhVueIcon)
  .mount('#app');
