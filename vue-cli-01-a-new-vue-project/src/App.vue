<template>
     <header>
      <h2 style="color: aliceblue;">My Friends</h2>
    </header>

   <new-friend @add-contact="addContact"></new-friend>
  <section>
 
    <ul>
      <!-- in questo modo posso passare i parametri a un componente che vengono recuperati dal componente attraverso l'utilizzo delle [props] questo ci permette di inviare i dati dal padre al figlio
      ma in alcuni casi ci serve la funzione inversa ciòè ottenere dei dati/aggiornamenti dal figlio al padre -->
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteFriend"
      > </friend-contact>
    </ul>
  </section>
</template>


<script>
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
export default {
  components: { FriendContact , NewFriend},
  data() {
 return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
          isFavorite: false
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
          isFavorite: false
        },
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(id) {
      const friend = this.friends.find(friend => friend.id === id);
      friend.isFavorite = !friend.isFavorite;
    },
    deleteFriend(id){
      const friendIndex = this.friends.findIndex(friend => friend.id === id);
      this.friends.splice(friendIndex, 1);
    },
    addContact(name, phone, email){
      const friend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(friend);
    }
  },
  computed: {

  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>