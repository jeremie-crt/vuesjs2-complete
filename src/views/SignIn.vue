<template>
    <div class="container">
        <div class="row">
            <div v-if="isLoading" class="col-md-12 text-center">
                <Spinner custom-style=""/>
            </div>

            <div v-else-if="isLoginOk" class="col-md-12" >
                <div class="col-md-12">
                    <ActionSuccess catchPhrase="Your are now login"/>
                    <p>
                        <router-link :to="{ name: 'home' }">
                            Go to home page <SvgRightArrow fill="#007bff" width="40px" height="40px"/>
                        </router-link>
                    </p>
                </div>
            </div>

            <div v-else class="col-md-12">
                <h2 class="mb-5">SIGN IN</h2>

                <form  class="col-md-6 offset-md-3" @submit.prevent="formSubmit">
                    <FormErrors :errors="errors"/>
                    <AjaxError :error="ajaxError"/>

                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email"
                               class="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"
                               v-model.lazy="email"
                        >
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

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { SIGNIN_USER } from "@/store/modules/actions.type";
import Validator from '@/utils/validate';
import FormErrors from '@/components/FormErrors';
import Spinner from "@/components/Spinner";
import SvgRightArrow from "@/components/SvgRightArrow";
import ActionSuccess from "@/components/ActionSuccess";
import AjaxError from "@/components/AjaxError";

export default {
    name: 'Register',
    components: {
        FormErrors,
        AjaxError,
        SvgRightArrow,
        ActionSuccess,
        Spinner
    },
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            ajaxError: '',
            isLoading: false,
            isLoginOk: false,
        }
    },
    methods: {
        async formSubmit() {
            this.errors = [];

            if (!Validator.validEmail(this.email)) {
                this.errors.push('Email is not correct')
            }
            if (this.password.length < 6) {
                this.errors.push('Password length min 6')
            }

            if (this.errors.length > 0) {
                return true;
            }

            this.isLoading = true;
            let save = await this.signin();
            this.cleanState();

            if(!save) {
                this.ajaxError = this.getAuthErrors
                return false;
            }
            this.isLoginOk = true;

            setTimeout(() => {
                this.$router.push({name: 'home'})
            }, 1800)

            return true;
        },
        cleanState() {
            this.email = ''
            this.password = ''
        },
        async signin() {
            let query = await this.$store.dispatch(SIGNIN_USER, {
                email: this.email, password: this.password
            })
            this.isLoading = false;

            return query
        },
    },
    computed: {
        ...mapGetters([
            'getAuthErrors'
        ])
    }
}
</script>