<template>
    <div class="home">
        <h1 class="mt-4">HOMEPAGE</h1>
        <p>{{ msg }}</p>
        <p>Hello {{ nickname }} </p>
        <p>Edit nickname</p>
        <input class="text" type="text" v-on:keypress.enter="updateNickname">
    </div>
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'
import {EDIT_NICKNAME, GET_AUTH_STATUS} from "@/store/modules/actions.type";

export default {
    name: 'Homepage',
    props: {
        msg: { type: String, required: false, default: 'Welcome on the VueJs project!!'}
    },
    computed: {
        ...mapGetters({
            nickname: 'getNickname'
        })
    },
    data() {
        return {
            username: ''
        }
    },
    methods: {
        updateNickname(event) {
            this.$store.dispatch(EDIT_NICKNAME, event.target.value)
        },
        ...mapActions([EDIT_NICKNAME])
    },
    beforeCreate() {
        this.$store.dispatch(GET_AUTH_STATUS)
    }
}
</script>
