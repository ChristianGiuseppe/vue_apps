<template>
  <section class="container">
    <user-data :user-name="firstName" :last-name="lastNameRefs" :age="age"></user-data>
    <h2>{{ user2.userName }}</h2>
    <h2>{{ user2.age }}</h2>
    <button @click="setAge"> Change Age</button>
    <!-- si possono utilizzare anche il v-model con la compostion-->
    <input type="text" placeholder="First Name" v-model="firstName" />

    <input type="text" placeholder="Last Name" @input="setLastName" />

    <!-- l'utilizzo con i refs -->
    <input type="text" placeholder="Last Name with refs" ref="lastNameRefs" />
    <button @click="setLastNameRef"> Set Last Name ref </button>
  </section>
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { isReactive, isRef } from 'vue';
//import { toRefs } from 'vue';

import { computed, watch, provide } from 'vue';

import UserData from './components/UserData.vue';
export default {
  components: {
    UserData
  },
  setup() {
    //const uName = ref('Christian'); // ho creato una valore reattivo
    // questo valore può cambiare
    const uAge = ref(31);
    //ci serve a capire se è reattivo
    isRef(uAge.value);//false questo ci permette di capire se sono valori reattivi


    const firstName = ref('');
    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    const lastName = ref('');
    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    provide('userAge', uAge);

    const lastNameRefs = ref(null);

    watch(uAge, function (newValue, oldValue) {
      console.log('old age' + oldValue);
      console.log('new age' + newValue);
    });

    const user = ref({
      name: 'Christian',
      age: 21
    });

    function setLastNameRef() {
      lastName.value = this.$refs.lastNameRefs.value;
    }

    //quando utilizziamo la reactive solo l'intero oggetto può cambiare e non i singoli valori quindi se provaimo 
    //a ritornare user2.name quello che succede è che non stiamo passando l'oggetto ma i valori e quindi non si aggiornano dopo l'intervallo
    const user2 = reactive({ //funziona solo con oggetti senza avere il wrapper del proxy
      name: 'Christian',
      age: 21
    });
    isReactive(user2.name); //false questo ci permette di capire se sono valori reattivi

    setTimeout(() => {
      uName.value = 'Giuseppe';
    }, 2000);

    setTimeout(() => {
      user.value.name = 'Giuseppe';
      user.value.age = 31;
    }, 2000);


    setTimeout(() => {
      user2.name = 'Manuel';
      user2.age = 32;
    }, 2000);

    //toRefs2 è una funzione che transforma l'oggetto in un un ref
    //const userRefs = toRefs(user2);
    // user2.name, user2.age

    function newAgeRef() {
      user.value.age = 32;
    }

    function newAgeReactive() {
      user2.age = 32;
    }

    return {
      userName: uName,
      age: uAge,
      user: user,
      user2: user2,
      setAgeRef: newAgeRef,
      setAgeReactive: newAgeReactive,
      setLastNameRef: setLastNameRef,
      lastNameRefs: lastNameRefs,
      firstName: firstName, //per utilizzarlo con v-model
      setLastName,
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>