<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="loading">Is Loading</p>
      <p v-else-if="!loading && (!result || result.length === 0)"> No Experiences loaded</p>
      <p v-else-if="!loading && error"> {{ error }}</p>
      <ul v-else-if="!loading && result.length > 0">
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      result: [],
      loading: false,
      error: null
    };
  },
  methods: {
    //ritorna una Promise
    //questo metodo potrebbe tornare un errore da parte del server quindi vedremo come gestirli
    //
    loadExperiences() {
      this.loading = true;
      this.error = null;
      fetch('https://vue-http-demo-85e9e.firebaseio.com/surveyes.json', {}).then(function (response) {
        if (response.ok) {
          return response.json();
        }
      }).then(
        function (data) {
          const results = [];
          //if else throws -- per errori che non vengono gestiti direttamente dal catch ma dobbiamo forzarlo noi
          data.forEach(element => {
            results.push({
              id: element.id,
              name: element.name,
              rating: element.rating
            });
          });
          this.result = results;
          this.loading = false;
        }
      ).
        //con il catch gestisco gli errori
        catch((error) => {
          this.loading = false;
          this.error = 'Failed to fetch data - please try again ' + error;
        });

    }
  },
  //caricare i dati quando il componenent è in loading
  mounted() {

    this.loadExperiences();

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>