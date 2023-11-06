<template>
    <div>
        <h1>Hello</h1>
        <ActiveUser :username="user.name" :userage="user.age"></ActiveUser>
        <UserData @change-user="setUserData"></UserData>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Christian Nocerino',
                age: 31
            }
        }
    },
    methods: {
        setUserData(name, age) {
            console.log(name, age);
            this.user = {
                name: name,
                age: age
            };
       
        }
    }
};
</script>

<style>
html {
    font-family: sans-serif;
}

section {
    margin: 2rem auto;
    max-width: 40 rem;
    border-radius: 12px;
    border: 1px solid #ccc;
}

input {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 20rem;

}
</style>