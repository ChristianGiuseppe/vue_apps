const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    confirmedInputName(){
      this.confirmedName = this.name;
    },
    setName(event){
      this.name = event.target.value;
      return this.name;
    },
    subtmitForm(){
      alert('Submitted');
    },
    addCounter(){
      this.counter = this.counter + 1;
      return this.counter;
    },
    reduceCounter(){
      if(this.counter > 0){
        this.counter = this.counter - 1;
        return this.counter;
      }
    },

    addByFive(num){
      this.counter = this.counter + num;
      return this.counter;
    },
    subtractByFive(num){
      if(this.counter > 0){
        this.counter = this.counter - num;
        return this.counter;
      }
    }
  },  
});

app.mount('#events');
