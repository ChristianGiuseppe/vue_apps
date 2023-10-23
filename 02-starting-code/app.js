const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue', /// [courseGoalA] is a property of object
            courseGoalB: '<h3>Master Vue and Build amazing App </h3>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {  //function
            const randomNumber = Math.random();
            if(randomNumber <0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }, /// define methods can be invoked
});

app.mount('#user-goal');
