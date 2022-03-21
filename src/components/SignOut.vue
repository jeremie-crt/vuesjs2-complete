<template>
    <div class="container">
        <h2>SIGN OUT</h2>
        <AjaxError :error="ajaxError"/>
    </div>
</template>

<script>
import {SIGN_OUT_USER} from "@/store/modules/actions.type";
import AjaxError from "@/components/AjaxError";
import {mapGetters} from "vuex";


export default {
    name: 'Logout',
    data() {
        return {
            ajaxError: '',
        }
    },
    components: {
      AjaxError
    },
    async beforeMount() {
        let query = await this.$store.dispatch(SIGN_OUT_USER)
        if(!query) {
            this.ajaxError = this.getAuthErrors
            return false;
        }

        return this.$router.push({name: 'home'});
    },
    computed: {
        ...mapGetters([
            'getAuthErrors'
        ])
    }
}
</script>