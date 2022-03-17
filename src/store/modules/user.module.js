import {EDIT_PASSWORD, EDIT_NICKNAME, EDIT_EMAIL} from "./mutations.type";
import {SET_EMAIL, SET_NICKNAME, SET_PASSWORD} from "./actions.type";

const userModule = {
    state: {
        time: (new Date),
        user: {
            nickname: '',
            email: '',
            password: ''
        }
    },

    getters: {
        getNickname: state => state.user.nickname,
        getEmail: state => state.user.email,
        getPassword: state => state.user.password,
    },

    mutations: {
        [EDIT_NICKNAME]: (state, value) => {
            state.user.nickname = value
        },
        [EDIT_EMAIL]: (state, value) => {
            state.user.email = value
        },
        [EDIT_PASSWORD]: (state, value) => {
            state.user.password = value
        }
    },

    actions: {
        [SET_NICKNAME](context, value) {
            context.commit('EDIT_NICKNAME', value)
        },
        [SET_EMAIL](context, value) {
            context.commit('EDIT_EMAIL', value)
        },
        [SET_PASSWORD](context, value) {
            context.commit('EDIT_PASSWORD', value)
        }
    },
}

export default userModule