import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';


const app = createApp(App);
//passiamo il routing all'app
app.use(router);

app.mount('#app');
