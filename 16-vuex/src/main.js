import { createApp } from 'vue';
import { store } from './store/index.js';


import App from './App.vue';


const app = createApp(App);

//in questo modo utilizzo questo store in App.vue andremo a vedere come utilizzarlo
app.use(store);

app.mount('#app');
