<!-- in questo caso in cui ci troviamo a gestire una lista nadiamo ad utilizzare il tag <TransitionGroup> questo elemento supporta le stesse proprietà dell'elemento <transition> 
    le transitioni CSS e Hook Javascript visti inella pagina App.vue -->
<template>
    <transition-group tag="ul" name="user-list">
        <!-- in questo modo posso animare anche più elementi contemporaneamente per controllare il singolo elemento si necessità del tag -->
        <li v-for="user in users" :key="user" @click="removeUser(user)">
            {{ user }}
        </li>
    </transition-group>
    <div>
        <input type="text" ref="userName" />
        <button @click="addUser()"> Add User</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Micheal']
        }
    },
    methods: {
        addUser() {
            const user = this.$refs.userNamre.value;
            this.users.unshift(user);
        },
        removeUser(user) {
            this.user = this.users.filter(usr => usr !== user);
        }
    }
}
</script>


<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px soldi #ccc;
    padding: 1rem;
    text-align: center;
}


.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active {
    transition: all;
}

.user-list-enter-to {
    opacity: 1;
    transform: translateX(0px);
}


.user-list-leave-from {
    opacity: 1;
    transform: translateX(0px);
}

.user-list-leave-active {
    transition: all 1s ease-in;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* abbiamo una classe speciale per evitare la cattiva animazione quando si rimuove un elemento o si aggiunge e quindi viene effettuata l'animazione di allargamento */

user-list-move {
    transition: transform 0.8s ease;
}
</style>