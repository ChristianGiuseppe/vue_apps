const app = Vue.createApp({
    data(){
        return {
            nameUser: '',
            confirmedName: ''
        }
    }, methods: {
        showAlert(){
            alert('Show Alert');
        },
        userName(event){
            this.nameUser = event.target.value;
        },
        confirmName(){
            this.confirmedName = this.nameUser;
        }
    },
});

app.mount('#assignment');