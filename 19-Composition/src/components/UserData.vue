<template>
    <h2> {{ userName }}</h2>
    <h3> {{ age }}</h3>
</template>


<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default {
    //come le option con le props
    setup(props) {
        const uName = computed(function () {
            return props.firstName + ' ' + props.lastName;
        });

        onBeforeMount(() => {
            console.log('onBeforeMount')
        });

        onMounted(() => {
            console.log('onMounted')
        });

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate')
        });

        onUpdated(() => {
            console.log('onUpdated')
        });

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount')
        });

        onUnmounted(() => {
            console.log('onUnmounted')
        });

        const age = inject('userAge')

        return {
            userName: uName,
            age: age
        }
    }
}
</script>