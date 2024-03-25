<template>
    <!-- in questo modo recuperiamo le informazioni a livello globale -->
    <h3>{{ counter }}</h3>


</template>

<script>
import { mapGetters } from "vuex";

export default {
    //in alcuni casi abbiamo bisogno di utilizzare degli helper

    computed: {
        // counter() {
        //     return this.$store.state.getters.finalCounter;
        // }
        ...mapGetters('numbers', ['finalCounter'])
    },
};
</script>