import { SET_NICKNAME, SET_EMAIL, SET_PASSWORD } from "./mutations.type";
import { EDIT_EMAIL, EDIT_NICKNAME, EDIT_PASSWORD } from "./actions.type";

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
        [SET_NICKNAME]: (state, value) => {
            state.user.nickname = value
        },
        [SET_EMAIL]: (state, value) => {
            state.user.email = value
        },
        [SET_PASSWORD]: (state, value) => {
            state.user.password = value
        }
    },

    actions: {
        [EDIT_NICKNAME](context, value) {
            context.commit(SET_NICKNAME, value)
        },
        [EDIT_EMAIL](context, value) {
            context.commit(SET_EMAIL, value)
        },
        [EDIT_PASSWORD](context, value) {
            context.commit(SET_PASSWORD, value)
        }
    },
}

export default userModule