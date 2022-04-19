import { firebaseAuth } from '@/services/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {SET_AUTH_ERRORS, SET_CURRENT_USER, SET_IS_LOGGED} from "@/store/modules/mutations.type";
import {
    CREATE_NEW_USER,
    EDIT_AUTH_ERRORS,
    EDIT_CURRENT_USER,
    EDIT_IS_LOGGED, GET_AUTH_STATUS, SIGN_OUT_USER,
    SIGNIN_USER
} from "@/store/modules/actions.type";

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
        [SET_CURRENT_USER]: (state, value) => {
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
        [EDIT_CURRENT_USER](context, payload) {
            context.commit(SET_CURRENT_USER, payload)
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
                .then(() => {
                    return true;
                })
                .catch((error) => {
                    if(error.code === 'auth/invalid-email') {
                        commit(SET_AUTH_ERRORS, 'Credentials are not correct')
                        return false;
                    }
                    if(error.code === 'auth/email-already-in-use') {
                        commit(SET_AUTH_ERRORS, 'Email is already used')
                        return false;
                    }
                });
        },

        [SIGNIN_USER]({ commit }, payload) {
            const { email, password } = payload;

            return signInWithEmailAndPassword(firebaseAuth, email, password)
                .then((userCredential) => {
                    const { uid, email } = userCredential.user;
                    commit(SET_CURRENT_USER, { id: uid, email: email })
                    commit(SET_IS_LOGGED, true)
                    return true;
                })
                .catch((error) => {
                    if(error.code === 'auth/user-not-found') {
                        commit(SET_AUTH_ERRORS, 'Credentials are not correct')
                        return false;
                    }
                });
        },

        [SIGN_OUT_USER]({ commit }) {
            return signOut(firebaseAuth).then(() => {
                commit(SET_CURRENT_USER, {})
                commit(SET_IS_LOGGED, false)
                return true;
            }).catch(() => {
                commit(SET_AUTH_ERRORS, 'Signout has failed')
                return false;
            });
        },

        [GET_AUTH_STATUS]({ commit }) {
            return onAuthStateChanged(firebaseAuth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const { uid, email } = user;
                    commit(SET_CURRENT_USER, { id: uid, email: email })
                    commit(SET_IS_LOGGED, true)
                    return true;
                } else {
                    commit(SET_CURRENT_USER, {})
                    commit(SET_IS_LOGGED, false)
                    return false;
                }
            });
        }
    },
}

export default authModule