<template>
    <div class="container">
        <h2>Profile</h2>
    </div>
</template>

<script>
import {GET_AUTH_STATUS} from "@/store/modules/actions.type";

export default {
    name: 'Profile',
    components: {
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
        cleanState() {
            this.email = ''
            this.password = ''
        },
    },
    async beforeMount() {
        await this.$store.dispatch(GET_AUTH_STATUS)
        if(!this.$store.getters.getIsLogged) {
            console.log('NOT CONNECTED');
            
            return this.$router.push({name: 'login'})
        }

        console.log('CONNECTED');
    }
}
</script>