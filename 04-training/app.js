const app = Vue.createApp({
    data() {
        return {
            number: 0
        }
    },
    computed: {
        result() {
            if (this.number === 37) {
                return this.number;
            } else if (this.number > 37) {
                return 'too much!';
            } else {
                return 'Not there yet';
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
              that.number = 0;
            }, 5000);
        }
    },
    methods: {
        add(value) {
            this.number = this.number + value;
        }
    },
});


app.mount('#assignment')