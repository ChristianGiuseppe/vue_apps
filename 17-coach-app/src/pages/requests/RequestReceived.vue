<template>
    <div>
        <h2>Request Received</h2>
        <section>
            <base-card>
                <header>
                    <h2>
                        Requests Received
                    </h2>
                </header>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasRequests">
                    <request-item v-for="req in receivedRequests" :key="req.id" :email="req.email"
                        :message="req.message">

                    </request-item>
                </ul>
                <h3 v-else>You haven't received any requests yet!</h3>
            </base-card>
        </section>
    </div>
</template>


<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    data() {
        return {
            error: null,
            isLoading: false,
        }
    },
    components: {
        RequestItem
    },
    computed: {
        receivedRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return !this.isLoading && this.$store.getters['requests/hasRequests'];
        }
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/loadRequests');
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }

            this.isLoading = false;
        },
        handleError() {
            this.error = null;
        }
    },

    created() {
        this.loadRequests();
    }
}
</script>

<style>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>