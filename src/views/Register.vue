<template>
    <div class="container">
        <h2>Registration</h2>

        <div class="row mt-5">
            <form class="col-md-6 offset-md-3" @submit.prevent="formSubmit">

                <FormErrors :errors="errors"/>

                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text"
                           class="form-control"
                           id="username"
                           placeholder="Enter an username"
                           v-model.lazy="username"
                    >
                </div>

                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email"
                           class="form-control"
                           id="email"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           v-model.lazy="email"
                    >
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password"
                           class="form-control"
                           id="password"
                           placeholder="Password"
                           v-model.lazy="password"
                    >
                </div>

                <div class="form-group">
                    <label for="confirmPwd">Confirm Password</label>
                    <input type="password"
                           class="form-control"
                           id="confirmPwd"
                           placeholder="Password"
                           v-model.lazy="confirmPwd"
                    >
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import Validator from '@/utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '@/services/firebase/firebase';
import FormErrors from '@/components/FormErrors';

export default {
    name: 'Register',
    components: {
        FormErrors
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPwd: '',
            errors: []
        }
    },
    methods: {
        formSubmit() {
            this.errors = [];

            if (!this.username) {
                this.errors.push('Name is missing')
            }
            if (!Validator.validEmail(this.email)) {
                this.errors.push('Email is not correct')
            }
            if (this.password < 6) {
                this.errors.push('Password length min 6')
            }
            if (this.password !== this.confirmPwd) {
                this.errors.push('Passwords must match')
            }
            if (this.errors.length > 0) {
                return true;
            }

            this.createUser();

        },
        cleanState() {
            this.email = ''
            this.password = ''
            this.confirmPwd = ''
        },
        createUser: function() {
            createUserWithEmailAndPassword(firebaseAuth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.dir(userCredential);
                    console.dir(user);
                })
                .catch((error) => {
                    if(error.code === 'auth/invalid-email' ||
                        error.code === 'auth/email-already-in-use'
                    ) {
                        this.errors.push('Credentials are not correct');
                        this.cleanState()
                    }
                });
        }
    },
    computed: {
    }
}
</script>