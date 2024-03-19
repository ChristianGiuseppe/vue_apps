<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <!-- Quando effettua una richiesta http se viene tolto il prevent dopo il tag @submit  verrà gestita dal browser 
      viene utilizzato nel caso in cui il backend è collegato strettamente  all'app vue ma nella maggior parte dei casi 
      l'app vue è separata e quindi serve prevenire il comportamento di default del browser-->
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;


      //non serve più perchè non dobbiamo aggiornare i dati localmente
      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      // richiesta senza axios
      fetch('https://vue-http-demo-85e9e.firebaseio.com/surveyes.json', {
        method: 'POST', //il metodo POST o GET o PATCH
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ //JSON.stringify  serve per trasformarlo in un oggetto json
          name: this.enteredName,
          rating: this.chosenRating,
        })
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>