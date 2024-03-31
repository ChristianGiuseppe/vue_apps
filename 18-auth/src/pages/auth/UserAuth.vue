<template>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating...">
        <base-spinner></base-spinner>
    </base-dialog>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !email.isValid }">
            <label for="email">User Name</label>
            <input type="text" id="email" v-model.trim="email.val" @blur="clearValidity('email')" />
            <p v-if="!email.isValid">Firstname must not be empty.</p>
        </div>
        <div class="form-control" :class="{ invalid: !password.isValid }">
            <label for="password">Password</label>
            <input type="password" id="email" v-model.trim="password.val" @blur="clearValidity('password')" />
            <p v-if="!password.isValid">Firstname must not be empty.</p>
        </div>
        <p v-if="!formIsValid"> Please enter a valid email and a valid password </p>
        <base-button>{{ submitCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchButtonCapion }}</base-button>
    </form>
</template>


<script>

export default {
    data() {
        return {
            mode: 'login',
            formIsValid: true,
            error: null,
            isLoading: false,
            email: {
                val: '',
                isValid: true,
            },
            password: {
                val: '',
                isValid: true,
            },
        }
    },
    computed: {
        submitCaption() {
            if (this.mode === 'login') {
                return 'Login';
            } else (this.mode === 'signup')
            {
                return 'Signup';
            }
        },
        switchButtonCapion() {
            if (this.mode === 'login') {
                return 'Signup';
            } else (this.mode === 'signup')
            {
                return 'Login';
            }
        }
    },
    methods: {
        clearValidity(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if (this.email.val === '' && !this.email.val.includes('@')) {
                this.email.isValid = false;
                this.formIsValid = false;
            }

            if (this.password.val === '' && this.password.val.length < 6) {
                this.password.isValid = false;
                this.formIsValid = false;
            }

        },
        async submitForm() {
            this.validateForm();

            if (!this.formIsValid) {
                return;
            }

            const formData = {
                email: this.email.val,
                password: this.password.val,
            };


            if (this.mode === 'login') {
                this.$store.dispatch('auth/login', formData);
                return;
            }

            if (this.mode === 'signup') {
                this.$store.dispatch('auth/signup', formData);
                return;
            }
            const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
            this.$route.replace(redirectUrl);
        },
        switchAuthMode() {
            if (this.mode === 'login') {
                this.mode = 'signup';
                return;
            }

            if (this.mode === 'signup') {
                this.mode = 'login';
                return;
            }
        }
    }
}
</script>

<style>
orm {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}
</style>