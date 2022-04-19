import {SET_NICKNAME, SET_EMAIL, SET_PASSWORD, SET_AVATAR} from "./mutations.type";
import {EDIT_AVATAR, EDIT_EMAIL, EDIT_NICKNAME, EDIT_PASSWORD} from "./actions.type";

const userModule = {
    state: {
        time: (new Date),
        user: {
            avatar: '',
            username: '',
            email: '',
            password: ''
        }
    },

    getters: {
        getAvatar: state => state.user.avatar,
        getNickname: state => state.user.username,
        getEmail: state => state.user.email,
        getPassword: state => state.user.password,
        getUserProfile: state => state.user,
    },

    mutations: {
        [SET_AVATAR]: (state, value) => {
            state.user.avatar = value
        },
        [SET_NICKNAME]: (state, value) => {
            state.user.username = value
        },
        [SET_EMAIL]: (state, value) => {
            state.user.email = value
        },
        [SET_PASSWORD]: (state, value) => {
            state.user.password = value
        }
    },

    actions: {
        [EDIT_AVATAR](context, value) {
            context.commit(SET_AVATAR, value)
        },
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