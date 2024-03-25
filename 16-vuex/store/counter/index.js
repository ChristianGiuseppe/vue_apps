import counterMutation from './mutations';
import counterGetters from './getters';
import counterActions from './actions';

//in questo modo possiamo creare molti moduli e riutilizzarli e ottenere un codice più pulito e organizzato
// in questo modo lo stato diventa locale e quindi si può accedere localmente mentre le mutations rimangono sempre a livello globale
// una cosa che potrebbe accadere che abbiamo mutations o actions con lo stesso nome per gestire questo problema si può utilizzare il Namingspace
const counterModule = {
    namedspace:true,
    state() { // è un metodo che restituisce uno state object questo conterrà le informazioni di tutta l'app
        return {
            counter: 0,
        }; 
    },
     mutations: counterMutation,
    getters: counterGetters,
    //sono simili alle mutazioni le differenze sono che 
    //le azioni posso commettere delle mutazioni e le azioni possono esegure codice asincrono
    actions: counterActions
}; 

export default counterModule;
