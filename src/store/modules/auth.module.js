import { firebaseAuth } from '@/services/firebase/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {SET_AUTH_ERRORS, SET_CURRENTUSER, SET_IS_LOGGED} from "@/store/modules/mutations.type";
import {CREATE_NEW_USER, EDIT_AUTH_ERRORS, EDIT_CURRENTUSER, EDIT_IS_LOGGED} from "@/store/modules/actions.type";

const authModule = {
    state: {
        currentUser: {},
        authErrors: '',
        isLogged: false
    },

    getters: {
        getCurrentUser: (state) => state.currentUser,
        getAuthErrors: (state) => state.authErrors,
        getIsLogged: (state) => state.isLogged,
    },

    mutations: {
        [SET_CURRENTUSER]: (state, value) => {
            state.currentUser = value
        },
        [SET_AUTH_ERRORS]: (state, value) => {
            state.authErrors = value
        },
        [SET_IS_LOGGED]: (state, value) => {
            state.isLogged = value
        },
    },

    actions: {
        [EDIT_CURRENTUSER](context, payload) {
            context.commit(SET_CURRENTUSER, payload)
        },
        [EDIT_AUTH_ERRORS](context, payload) {
            context.commit(SET_AUTH_ERRORS, payload)
        },
        [EDIT_IS_LOGGED](context, payload) {
            context.commit(SET_IS_LOGGED, payload)
        },
        [CREATE_NEW_USER]({ commit }, payload) {
            const { email, password } = payload;

            return createUserWithEmailAndPassword(firebaseAuth, email, password)
                .then((userCredential) => {
                    commit(SET_CURRENTUSER, userCredential.user)
                    commit(SET_IS_LOGGED, true)
                    return true;
                })
                .catch((error) => {
                    if(error.code === 'auth/invalid-email' ||
                        error.code === 'auth/email-already-in-use'
                    ) {
                        commit(SET_AUTH_ERRORS, 'Credentials are not correct')
                        return false;
                    }
                });
        }
    },
}

export default authModule