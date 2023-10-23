const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName: ''
    };
  },
   watch: {
  //   ///questo  è il watcher esegue un operazione soltanto quando il valore del name cambia
  //   ///[nomevariable()]
  //   name(value) {
  //     if (value === '') {
  //       this.fullName = '';
  //     } else {
  //       this.fullName = value + ' ' + this.lastName;
  //     }
  //   },
  //   lastName(value) {
  //     if (value === '') {
  //       this.fullName = '';
  //     } else {
  //       this.fullName = this.name + ' ' + value;
  //     }
  //   },

  counter(value){
    if(value > 50){
      /// il watcher è buono quando vogliamo impostare un time oppure fare chiamate HTTP per inviare determinati dati
      this.counter = 0;
    }
  }
   },
  computed: {
     fullName(){
      if(this.name === '' ||  this.lastName === '' ){
        return '';
      }
      return this.name + ' ' + 'Nocerino'
      }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    outputFullName() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Nocerino'
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      //document.querySelector.apply('input').value = '';
      this.name = '';
    }
  }
});

app.mount('#events');


///
/// [methods]:  utilizzati nel modello per associare i dati ad esempio per utlizzarli in 
/// un'interpolazione oppure per l'associazione di eventi se si utilizza il databinding e si 
///utilizza tra le parentesi ciò che accade è che si refresha ad ogni modifica 
/// [computed]: utilizzati per solo con l'associazione dei dati e non ultizzari per 
/// l'associazione di eventi, sono importanti per calcolare poprietà derivate da altri dati 
/// in questo modo non vengono rivalutati e riseguiti ogni volta che cambiano i dati
/// [watcher]: può osservare il cambiamento delle proprietà e questo ti permetti di eseguire 
///codice in reazione del cambiamento dei dati come detto in precedenza ad esempio eseguire 
///una chiamata HTTP