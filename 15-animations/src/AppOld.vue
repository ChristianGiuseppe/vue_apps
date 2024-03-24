<template>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block"></div>
    <button @click="animateBlock" :class="{ animate: animateBlock }">Animate</button>
  </div>
  <div class="container">
    <!-- NB: l'elemento <transition></transition> vuole solo un elemento diretto-->
    <!--componente vue che gestisce la transizione questo elemento e passare per 
      3 state Element-not mounted - Element mounted - Element not mounted aggiunge le seguenti classi 
      *-enter-from *-enter-to *-enter-active ->   EMENTMOUNTED -> *-leave-from *-leave-to *-leave-active -->
    <!-- nel caso in cui di più animazioni e si ha bisogno di classi custom si possono aggiugere le seguenti proprietà
      name="para" enter-to-class="some-class" enter-from-class="some-class" enter-active-class="some class"-->
    <!-- in acluni casi vogliamo avere la gestione dell'animazione lato javascript per questo vue mette a disposizione 
      una serie di eventi che possono essere utilizzzati per gestire le transizioni come @before-enter @before-leave ecc -->
    <!-- quando si decide di utilizzare semplicemente le animazioni javascript è buona prazzi utilizzare :css="false" prop . 
        Questa proprietà della dice a Vue di  skippare il css delle transition -->
    <!-- ci permette di avere un codice più performante, questo impedisce anche delle regole CSS di interferire accidentamente nelle transizione -->
    <transition name="para">
      <p v-if="isParagraphVisible"> This only sometime visible</p>
      <button @click="toogleParagraph">
        Toggle Button
      </button>
    </transition>
  </div>
  <div>
    <transition>
      <!-- come detto in precedenza il transition può gestire un solo elemento diretto ma esiste un eccezione che praticamente è possibile mantenere visibile soltanto oggetto nello stesso tempo-->
      <!-- come viene identificato in questo caso con il v-if-->
      <button @click="showUsers" v-if="!usersAreVisible"> Show users </button>
      <button @click="hideUsers" v-else> Hide users</button>
    </transition>
  </div>
  <transition name="modal" mode="out-in">
    <base-modal @close="hideDialog" v-if="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  </transition>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';
export default {

  components: { ListData },
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

/* Vue animation */

.v-enter-form {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-form {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* gli stili sono quelli di default però potrebbe accadare che nella UI abbiamo bisogno di più animazioni differenti
e quindi si necessitano differenti classi per le animazioni però abbiamo visto che gli stile di animazione sopra citati sono quelli di default quindi di seguito creiamo degli stili custom che possono essere 
riconosciuti da parte di vue*/

.para-enter-form {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-form {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active {
  transition: all 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
}



.animate {
  /*transform: translateX(-150px);*/
  /* adesso andiamo a definire l'animazione che abbiamo definito sotto con @keyframes */
  animation: slide-fade 0.3s ease-out forwards;
  /* con forwards vogliamo che mantiene l'ultimo frame dell'animazione */
}


.fade-button-leave-to,
.fade-button-enter-form {
  opacity: 0;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-form,
.fade-button-enter-to {
  opacity: 1;
}

/*Adesso andiamo a definire un'animazione con diversi stati */
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>