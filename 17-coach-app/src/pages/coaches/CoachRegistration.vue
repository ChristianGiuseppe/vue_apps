<template>
    <div>
        <section>
            <base-card>
                <h2>Coach Registration</h2>
                <coach-form @save-data="saveData"></coach-form>
            </base-card>
        </section>
    </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';


export default {
    components: {
        CoachForm
    },

    methods: {
        saveData(coach) {
            this.$store.dispatch('coaches/registerCoach', coach);
            this.$router.replace('/coaches');
        }
    }
};
</script>