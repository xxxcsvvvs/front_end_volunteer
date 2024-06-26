import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//bootstrap 관련 javaScript와 css 로딩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

createApp(App).component('VueDatePicker', VueDatePicker).use(store).use(router).mount('#app')
