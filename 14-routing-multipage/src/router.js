import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import UserFooter from './pages/UserFooter.vue';
import NotFound from './pages/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';


//Con la parte che abbiamo visto ora con vue possiamo notare 
//che il nostro url non cambia mai anche quando dobbiamo
//realizzare la visualizzazione di diù pagine quindi il
//problema che si potrebbe verificare è che praticamente
//se vogliamo condivide l’url a una persona risulta sempre la  
//stessa per risolvere questo problema si utilizza il cosìdetto
//routing 


//npm install --save vue-router
const router = createRouter({
    history: createWebHistory(), // per aggiugere la history della cronologie della navigazione
    routes: [
        {
            path: '/', //risulta essere il path di default
            redirect: '/teams', //quando si verifica lo / come routing lo reinderizza al componente sotto
        },
        {   
            name: 'team',
            path: '/teams',  //nostrodominio.com/teams
            meta: { needAuth: true}, //puoi accedere a questo meta campo in tutti i luoghi in cui è disponibile l'oggetto route, l'oggetto route con il simbolo del dollaro. si può anche accedere attraverso le guard
            components: { default: TeamsList,  footer: TeamsFooter },//il component che deve caricare
            children: [ //con questo parametro andiamo a realizzare un routing innestato però questo metodo non permette
            //la visualizzazione del router-view all'interno del file App.vue quindi sarà necessario dichiarare un nuovo router-view nel file TeamMembers.vue
                {  
                     name: 'team-members',
                     path: '/teams/:teamid',//per passare alla navigazione un id
                     component: TeamMembers,
                     props: true, //questo parametro dice al componente che possono essere passate i parametri dinamicamente a questo componente che solo sulla proprietà $route
                },
            ],
        },
        {
            path: '/users',
            components: { default: UsersList, footer: UserFooter },
            beforeEnter(to, from, next) { //nel caso in cui non si vuole invocare il metodo a questo livello ed evitare conflitti è possibile pasarlo verso il componente
                console.log("BEFORE Enter");
                console.log(to, from);
                next();
            } //questo metodo funziona come il beforeEach e viene applicata sulla singola rotta
        },
        {
            path: '/teams/:teamid',//per passare alla navigazione un id
            component: TeamMembers,
            props: true, //questo parametro dice al componente che possono essere passate i parametri dinamicamente a questo componente che solo sulla proprietà $route
        },
        {
            path: '/:notFound(.*)', //quando il path inserito non viene individuato
            component: NotFound
        }

    ],
    //classe associata per cambiare lo stile quindi basta andare nello style e modificare questa classe
    linkActiveClass: "active",
    scrollBehavior(to, from, savePosition) {
        if (savePosition) {
            return savePosition; //se ho un posizione utilizzo quella 
        }
        //altrimenti se è una nuova pagina torno su all'inizio
        return {
            left: 0,
            top: 0
        };
    } //definisce il metodo di scroll quando si naviga da una pagina ad un altra
});

//GUARD
//il beforeEach prende in ingresso una funzione che ha 3 valori:
// to: rotta da cui stiamo andando
// from: rotta da cui stiamo uscendo
// next: pagina da cui proviene e successiva, che utilizziamo per confermare  o annullare la navigazione ad esempio vogliamo negare la navigazione perchè l'utente non è autenticato
router.beforeEach(function (to, from, next) {
    console.log("GLOBAL BeforeEach");
    console.log(to, from);
    var auth = to.meta.needAuth //Questo parametro meta può essere acceduto anche dalla parte delle GUARD
    if (auth) {
        next();
    }
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: "team-members", params:{ teamId: 't2' }});
    // }
   //next(false) per annullare la navigazione oppure una navigazione next("/user") ecc next({ name: "team-members", params:{teamId: 't2'}})
    next();
}); //questa funzione viene invocata prima che viene eseguita la navigazione verso una rotta

//il metodo afterEach viene invocato soltanto se viene accettata la navigazione e quindi viene già costruito il componente o la pagina
//sepesso viene utilizzato per effettuare l'analisi  
router.afterEach(function (to, from) {
    console.log("GLOBAL aftereach");
     console.log(to, from);
});

export default router;
