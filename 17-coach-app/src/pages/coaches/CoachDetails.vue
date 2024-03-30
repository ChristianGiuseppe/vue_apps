<template>
    <div>
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </base-card>
        </section>
        <section>
            <base-card>
                <header>
                    <h2> Interested ? </h2>
                    <base-button link :to="contactLink"> Contact </base-button>
                </header>
                <router-view></router-view>
            </base-card>
        </section>
        <section>
            <base-card>
                <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
                <p>{{ description }}</p>
            </base-card>
        </section>
    </div>
    <!-- <router-link to="/coaches/c1/contact"></router-link> -->
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        };
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contacts';
        },
        areas() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find((c) => c.id === this.id);
        console.log("Selected coach", this.selectedCoach);
    },
}
</script>

<style scoped></style>