<template>
  <base-dialog v-if="inputIsInvalid" title="Input Invalid" @close="closeDialog">
    <template #default>
      <p> Your input value is invalid </p>
      <p> Insert a valid input </p>
    </template>
    <template #actions>
      <base-button @click="closeDialog">
        Okay
      </base-button>
    </template>
  </base-dialog>
  <base-card>
    <!--In questo modo invoco il metodo con un trigger-->
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="descriptionArea" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>


<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    submitData() {
      const enteredTitleInput = this.$refs.titleInput.value;
      const enteredDescriptionArea = this.$refs.descriptionArea.value;
      const enteredUrlInput = this.$refs.linkInput.value;

      if (enteredTitleInput.trim() === '' || enteredDescriptionArea.trim() === '' || enteredUrlInput.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }



      this.addResource(enteredTitleInput, enteredDescriptionArea, enteredUrlInput);

    },
    closeDialog() {
      this.inputIsInvalid = false;
      return;
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>