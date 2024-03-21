<template>
  <router-view></router-view>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
  </section>
</template>

<script>
//Il routing in vue non interferisce nel flusso del ciclo di vita quindi una volta che ha creato il componente 
// e si fa una redirect a un altro elemento manualmente questo non verrà renderizzato perchè già ha eseguito il suo normale ciclo
//
import UserItem from '../users/UserItem.vue';

//se passiamo props: true al routing al main.js la navigazione di questo componente risulta essere
//più riutilizzabile perchè si basa la navigazione in base alle props che vengono passate e non solo dal routing
export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    }
  },
  methods: {
    loadMemembers(teamId) {
      const selectItem = this.teams.find(team => team.id === teamId);
      const members = selectItem.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member)
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectItem.name;
    }
  },

  created() {
    this.loadMemembers(this.teamId);
  },
  watch: {
    teamId(newId) {
      this.loadMemembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>