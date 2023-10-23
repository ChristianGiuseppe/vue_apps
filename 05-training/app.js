const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            visibility: true
        }
    },
    methods: {
        toogleVisibility() {
            this.visibility = !this.visibility;
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.visibility,
                hidden: !this.visibility
            };
        }
    },
    watch: {

    }
});


app.mount('#assignment');