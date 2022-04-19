<template>
    <div id="app">
        <HeaderNav/>

        <router-view></router-view>

        <Footer/>
    </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav"
import Footer from "@/components/Footer"
import {SIGN_OUT_USER} from "@/store/modules/actions.type";

export default {
    name: "App",
    components: {
        HeaderNav,
        Footer
    },
    beforeDestroy() {
        this.$store.dispatch(SIGN_OUT_USER)
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>
