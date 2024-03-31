Composition API
Le composition API ci permettono di creare componenti
In modo differente ma non totalmente differente. Le composition api sono opzionali al 100%

Cosa sono le composition API
Per adesso abbiamo utilizzato le Options API
{
data(){},
methods(){},
}

La composition è un modo alternativo di scrivere la logica dei nostri componenti per due limitazioni che riscontriamo per applicazioni veramente grandi.
Il primo problema il codice è diviso i diversi pezzi e l’altro è il riutilizzo del codice che può essere complicato.
Quindi quello che viene fatto è meriggiare i vari metodi

- Data()
- Methods
- Computed
- Watch

In un unico metodo di configurazione setup.

Ref è il riferimento ai nostri valori ma quelli che possono cambiare e possiamo aggiornare per andare a modificare il DOM.
