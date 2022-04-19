<template>
    <div class="container">
        <h2>Profile</h2>
        <div class="row">
            <div class="col-md-6">
                <form  class="form" @submit.prevent="formSubmit" name="form" id="form">
                    <FormErrors :errors="errors"/>
                    <AjaxError :error="ajaxError"/>

                    <div class="form-group">
                        <label for="file">Avatar</label>
                        <input type="file"
                               class="form-control"
                               id="file"
                               placeholder="Enter an username"
                               name="file"
                        >
                    </div>

                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text"
                               class="form-control"
                               id="username"
                               placeholder="Enter an username"
                               name="username"
                               v-model.lazy="user.username"
                        >
                    </div>

                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email"
                               class="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               name="email"
                               v-model.lazy="user.email"
                        >
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                               class="form-control"
                               id="password"
                               placeholder="Password"
                               name="password"
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

            <div class="col-md-6">
                <div class="container">
                    <h3 class="mb-4">My Articles</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <img src="../assets/wall-horz1.jpg" alt="" width="100%">
                            </div>
                            <div class="text-center">
                                <h3>Fake title goes here</h3>
                            </div>
                            <div class="text-justify">
                                <p>je suis dans une ruelle jolie et bleue où le temps passe et défile à vive allure et je me demande bien ce que la vie sera et pourra être dans ce futur proche mais aussi lointain. La camaraderie triomphera, je l'espère, au détriment de tout rapport superficiel, oui cela serait beau, oui cela sera beau. à toi, à nous, pour toi et pour nous. Cela est doux.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <img src="../assets/wall-horz1.jpg" alt="" width="100%">
                            </div>
                            <div class="text-center">
                                <h3>Fake title goes here</h3>
                            </div>
                            <div class="text-justify">
                                <p>je suis dans une ruelle jolie et bleue où le temps passe et défile à vive allure et je me demande bien ce que la vie sera et pourra être dans ce futur proche mais aussi lointain. La camaraderie triomphera, je l'espère, au détriment de tout rapport superficiel, oui cela serait beau, oui cela sera beau. à toi, à nous, pour toi et pour nous. Cela est doux.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <img src="../assets/wall-horz1.jpg" alt="" width="100%">
                            </div>
                            <div class="text-center">
                                <h3>Fake title goes here</h3>
                            </div>
                            <div class="text-justify">
                                <p>je suis dans une ruelle jolie et bleue où le temps passe et défile à vive allure et je me demande bien ce que la vie sera et pourra être dans ce futur proche mais aussi lointain. La camaraderie triomphera, je l'espère, au détriment de tout rapport superficiel, oui cela serait beau, oui cela sera beau. à toi, à nous, pour toi et pour nous. Cela est doux.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div>
                                <img src="../assets/wall-horz1.jpg" alt="" width="100%">
                            </div>
                            <div class="text-center">
                                <h3>Fake title goes here</h3>
                            </div>
                            <div class="text-justify">
                                <p>je suis dans une ruelle jolie et bleue où le temps passe et défile à vive allure et je me demande bien ce que la vie sera et pourra être dans ce futur proche mais aussi lointain. La camaraderie triomphera, je l'espère, au détriment de tout rapport superficiel, oui cela serait beau, oui cela sera beau. à toi, à nous, pour toi et pour nous. Cela est doux.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {GET_AUTH_STATUS} from "@/store/modules/actions.type";
import FormErrors from "@/components/FormErrors";
import AjaxError from "@/components/AjaxError";
import fs from 'fs'

export default {
    name: 'Profile',
    components: {
        FormErrors,
        AjaxError,
    },
    data() {
        return {
            user: {
                avatar: '',
                username: '',
                email: '',
            },
            password: '',
            confirmPwd: '',
            errors: [],
            ajaxError: '',
            isLoading: false,
            isLoginOk: false,
        }
    },
    methods: {
        cleanState() {
            this.email = ''
            this.password = ''
        },
        formSubmit(e) {
            // if (!this.username) {
            //     this.errors.push('Name is missing')
            // }
            // if (!Validator.validEmail(this.email)) {
            //     this.errors.push('Email is not correct')
            // }
            // if (this.password.length < 6) {
            //     this.errors.push('Password length min 6')
            // }
            // if (this.password !== this.confirmPwd) {
            //     this.errors.push('Passwords must match')
            // }
            // if (this.errors.length > 0) {
            //     return false;
            // }

            this.isLoading = true;

            let form = new FormData(e.target)
            console.log(form.get('file'));
            fs.copyFile

        }
    },
    cleanState() {
        this.email = ''
        this.password = ''
        this.confirmPwd = ''
    },
    async beforeMount() {
        await this.$store.dispatch(GET_AUTH_STATUS)
        if(!this.$store.getters.getIsLogged) {
            return this.$router.push({name: 'login'})
        }

        console.log('CONNECTED');
    }
}
</script>