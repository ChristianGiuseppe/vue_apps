<template>
    <button @click="addOne">Add 1</button>
    <button @click="increase">Add 10</button>
</template>

<script>
import { mapActions } from "vuex"; //sono degli helper che ci permettono di tenere le azzioni in locale
export default {

    methods: {
        ...mapActions('numbers', {
            inc: 'increment',
            increase: 'increase'
        })
        // addOne() {
        //     //commit esegue il metodo che vogliamo invocare
        //     // con dispatch invece invoco le 
        //     this.$store.dispatch('increment');
        // },
        // addTen() {
        //     //commit esegue il metodo che vogliamo invocare
        //     this.$store.commit('increase', { value: 10 });

        //     //oppure utilizzare questo metodo per invocare il metodo 
        //     this.$store.commit({
        //         type: 'increase',
        //         value: 10
        //     });
        // }
    }
};
</script>