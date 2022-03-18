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
import {mapActions, mapGetters} from 'vuex'
import {CREATE_NEW_USER} from "@/store/modules/actions.type";
import Validator from '@/utils/validate';
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
        async formSubmit() {
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
                return false;
            }

            let save = await this.saveUser();
            console.log('this.getAuthErrors');
            this.cleanState();
            if(save) {
                console.log('goodddddddddd');
            } else {
                console.log('FALSEEE');
                console.log(this.getAuthErrors);
                this.errors.push(this.getAuthErrors)
                return false;
            }
        },
        cleanState() {
            this.email = ''
            this.password = ''
            this.confirmPwd = ''
        },
        async saveUser() {
            console.log('this.saveUser');
            let query = await this.$store.dispatch(CREATE_NEW_USER, {
                email: this.email, password: this.password
            })
            console.log('query', query);
            return query
        },
        ...mapActions([
            CREATE_NEW_USER
        ]),
    },
    computed: {
        ...mapGetters([
            'getAuthErrors'
        ])
    }
}
</script>