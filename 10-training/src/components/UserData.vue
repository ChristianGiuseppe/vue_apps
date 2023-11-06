<template>
     <section>
      <form @submit.prevent="submitData">
       <input type="text" placeholder="Your name" v-model="enteredName">
       <input type="text" placeholder="Your Age" v-model="enteredAge">

        <button>Change User</button>
      </form>
    </section>
</template>

<script>

export default {
  emits: ['change-user'],
  data(){
    return {
      enteredName: '',
      enteredAge: 0,
    }
  },
  methods: {
    submitData(){
      this.$emit('change-user', this.enteredName, this.enteredAge);
    }
  }
};
</script>

<style>

</style>