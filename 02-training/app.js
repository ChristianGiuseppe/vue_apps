const app = Vue.createApp({
    data(){
        return {
            name: 'Christian',
            age: 28,
            imageUrl: '/Users/user/Desktop/Corso\ Vue/03-basics-training/me.png'
        }
    },
    methods: {
        increaseAgeByFive(){
           return this.age + 5;
        },
        randomNumber(){
            return Math.random();
            
        }
    },
});

app.mount('#assignment');