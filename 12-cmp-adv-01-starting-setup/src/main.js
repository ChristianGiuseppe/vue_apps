import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';


const app = createApp(App);
// Global component registration :in questo modo abbiamo registrato i componenti in modo globale
// in questo modo possiamo usare i componenti in tutti i file senza doverli importare
// NB: non è una buona pratica, è meglio importare i componenti solo dove servono
// perchè nel momento in cui l'app scala e diventa grande allora bisogna caricare tutti i componenti
// e questo rallenta l'app
//app.component('the-header', TheHeader);
// app.component('user-info', UserInfo);
// ad esempio adesso importiamo questo componente a livello locale
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);


app.mount('#app');
