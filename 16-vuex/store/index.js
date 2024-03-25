import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';
import rootActions from './actions';
import counterModule from './counter/index.js';
//per ogni applicazione posso avere un solo store ma questi possono essere suddivisi in più moduli
const store = createStore({
    modules: {
        //numbers rappresenta il name space del counterModule
        numbers: counterModule
    },
    state() { // è un metodo che restituisce uno state object questo conterrà le informazioni di tutta l'app
        return {
            // counter: 0,
            isLoggedIn: false
        }; 
    },
    mutations: rootMutations,
    getters: rootGetters,
    //sono simili alle mutazioni le differenze sono che 
    //le azioni posso commettere delle mutazioni e le azioni possono esegure codice asincrono
    actions: rootActions
});

export default store;