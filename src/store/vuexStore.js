import Vue from 'vue'
import Vuex from 'vuex'
import userModule from "@/store/modules/user.module";
import authModule from "@/store/modules/auth.module";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userStore: userModule,
    authModule
  }
})


//Dans les mutations et accesseurs d'un module, le premier argument reçu sera l'état local du module.
//De façon similaire, dans les actions du module, context.state exposera l'état local, et l'état racine sera disponible avec context.rootState
//Également, dans les accesseurs du module, l'état racine sera exposé en troisième argument :

//https://vuex.vuejs.org/fr/guide/modules.html