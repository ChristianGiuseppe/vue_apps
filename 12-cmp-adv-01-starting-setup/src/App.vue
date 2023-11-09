<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info> 
    <!-- per recuperare un props che si trova all'interno di un componente e viene passato negli slot-->
    <course-goals #default="slotProps">
      <h2 >
        {{ slotProps.item }}
      </h2>
      <p> {{slotProps['another-prop'] }}</p>
    </course-goals>
  </div>
</template>

<script>
// in questo modo inseriamo il componente TheHeader in App.vue e lo rendiamo disponibile
// per essere utilizzato all'interno del template
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';


export default {
  components: {
   'the-header': TheHeader,
   'user-info': UserInfo,
   'badge-list': BadgeList,
   'course-goals': CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>