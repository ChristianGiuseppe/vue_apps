const app = Vue.createApp({
    data() {
        return {

            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        };
    },
    methods: {

    },
},);

///Potresti ricordare la lezione 3 (" Diversi modi di usare Vue "): puoi usare Vue.js per controllare parti di pagine (possibilmente più HTML) OPPURE puoi usarlo per creare le cosiddette " Applicazioni a pagina singola " ( SPA ).
// Se controlli più parti indipendenti di pagine HTML, lavorerai spesso con più app Vue (ovvero creerai più app chiamando createApp()più di una volta).
// D'altra parte, se stai creando una SPA, in genere lavori con una sola "app root" (ovvero createApp()viene utilizzata solo una volta nell'intera base di codice) e crei invece un'interfaccia utente con più componenti .
// Puoi assolutamente utilizzare anche i componenti nei casi in cui disponi di più app Vue, ma in genere non utilizzerai più app Vue se crei un'unica grande interfaccia utente connessa.
// Perché?
// Poiché le app Vue sono indipendenti l'una dall'altra , non possono realmente comunicare tra loro. Potresti trovare "hack" per farlo funzionare, ma non esiste un ottimo modo "ufficiale" per condividere dati tra app, aggiornare qualcosa nell'app A nel caso succeda qualcosa nell'app B ecc.
// I componenti d'altra parte, come imparerai presto, offrono determinati meccanismi di comunicazione che consentono di scambiare dati tra di loro. Quindi puoi creare un'interfaccia utente connessa se lavori con un'app root che contiene più componenti.
app.component('friend-contact', {
    template: `  `,
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
});


app.mount("#app");