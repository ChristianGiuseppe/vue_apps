<template>
  <button @click="confirmInput"></button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  //per effettuare la navigation tramite javascript poichè stiamo utilizzando il routing 
  //vue mette a disposizione un componente
  components: {
    UserItem,
  },

  inject: ['users'],
  data() {
    return {
      changeSaved: false
    };
  },
  methods: {
    confirmInput() {
      this.$router.push("/teams");
      //forward || back per andare avanti o indietro
    },
    saveChanges() {
      this.changeSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) { //prima di arrivare a buildare il componente i livelli sono GLOBAL, ROUTING, COMPONENT
    console.log("Component before Enter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Before Route Leave");
    if (this.changeSaved) {
      next();
    } else {
      prompt('Are you sure?');
    }

  },
  unmounted() { //viene eseguito dopo le guard noi invece vogliamo eseguire un codice prima che si lascia la pagina
    console.log("unmount");
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>