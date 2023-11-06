<template>
    <li>
      <h2>{{ name }} {{ isFavorite  ? 'Favorite' : ''}}</h2>
      <button @click="toggleFavorite"> Toogle Favorite </button>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li>
          <strong>Phone:</strong>
          {{ phoneNumber }}
        </li>
        <li>
          <strong>Email:</strong>
          {{ emailAddress }}
        </li>
      </ul>
      <button @click.prevent="deleteElement">Delete</button>
    </li>
  </template>
  
  <script>
  export default {  // valori props: String, Number, Boolean, Array, Object, Date, Function, Symbol
    // props: [
    //   'name',
    //   'phoneNumber',
    //   'emailAddress',
    //   'isFavorite'
    // ],
    // alternativa di passsare i parametri 
    props:{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false, //questo valore è non required questo vuol dire che praticamente può essere passato o meno
            default: false,
         
        }
    },
    // rappresenta il modo in cui il componente può comunicare con il padre
    emits: ['toggle-favorite', 'delete-friend'],
    // emits: {
    //     'toggle-favorite': function(id){
    //         if(id){
    //             return true;
    //         }
    //         return false;
    //     }
    // },
    data() {
      return {
        detailsAreVisible: false,
        /// per modificare il valore di un dato bisogna assegnarlo a una variabile interna 
        //friendIsFavorite: this.isFavorite
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
        this.$emit('toggle-favorite', this.id);
      },
      deleteElement(){
          this.$emit('delete-friend', this.id);
      }
    }
  };
  </script>