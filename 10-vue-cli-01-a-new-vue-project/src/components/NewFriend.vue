<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" v-model="newName" placeholder="Name" />
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel"  v-mode="newPhone" placeholder="Phone" />
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email"  v-model="newEmail" placeholder="Email" />
        </div>
        <button>Add Contact</button>
    </form>
</template>

<script>
 export default { 
    emits: ['add-contact'],
    data() {
        return {
            newName: '',
            newPhone: '',
            newEmail: ''
        }
    },
    methods: {
        submitData(){
            this.$emit('add-contact', this.newName, this.newPhone, this.newEmail);
            }
        }

 };
</script>


<style>


</style>
