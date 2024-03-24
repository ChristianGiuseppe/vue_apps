<template>
  <!-- con transition possiamo anche animare la transizione tra le pagine -->
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import ListData from './components/ListData.vue';
export default {

  // components: { ListData },
  data() {
    return {
      animatedBlock: false, //utilizzeremo questa classe per andare aggiungere una classe CSS in modo condizionele
      dialogIsVisible: false,
      isParagraphVisible: false,
      usersAreVisible: false
    };
  },
  methods: {
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animateBlock = true;
    },
    toogleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    }
  },
};
</script>

<!-- le animazioni in css non sono sufficienti  -->
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out;*/
  /* rappresenta il modo in cui andiamo ad animare un trasform in questo caso la classe .animate che si trova sotto */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/* Vue animation page */

route-enter-from {}

route-enter-active {
  animation: slide-scale 0.4s ease-in-out;
}

route-enter-to {}


route-leave-active {
  animation: slide-scale 0.4s ease-in;
}
</style>