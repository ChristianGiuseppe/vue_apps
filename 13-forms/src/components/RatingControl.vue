<template>
    <ul>
        <!--:class="{ active: activeOption === 'Poor' }"> attiviamo un certo tipo di stile nel momento in cui si verifica una condizione -->
        <li :class="{ active: modelValue === 'Poor' }"><button type="button" @click="activate('Poor')">Poor</button>
        </li>
        <li :class="{ active: modelValue === 'Average' }"><button type="button"
                @click="activate('Average')">Average</button></li>
        <li :class="{ active: modelValue === 'Great' }"><button type=" button" @click="activate('Great')">Great</button>
        </li>
    </ul>
</template>

<script>


export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // data() {
    //     return {
    //         activeOption: this.modelValue,
    //     };
    // },
    computed: {
        activeOption() {
            return this.modelValue;
        }
    },
    methods: {
        activate(option) {
            this.$emit('update:modelValue', option)
        }
    }
};
</script>

<style scoped>
.active {
    border-color: #a00078;
}

.active button {
    color: #a00078;
}

ul {
    list-style: none;
    margin: 0.5rem, 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-self: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>