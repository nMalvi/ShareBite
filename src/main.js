import { createApp } from 'vue';
import App from './App.vue';
import UserLogin from './components/userLogin.vue';

const app = createApp(App);
app.component('UserLogin', UserLogin);
app.mount('#app');
