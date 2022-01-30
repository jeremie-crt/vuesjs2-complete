import { EDIT_NICKNAME } from "./mutations.type";
import { SET_NICKNAME } from "./actions.type";

const userModule = {
    state: {
        time: 'TODAY IS SATURDAY',
        user: {
            nickname: 'bob',
            email: 'bob@live.fr',
            password: ''
        }
    },

    getters: {
        getNickname: state => state.user.nickname,
        getEmail: state => state.user.email,
    },

    mutations: {
        [EDIT_NICKNAME]: (state, value) => {
            state.user.nickname = value
        }
    },

    actions: {
        [SET_NICKNAME](context, value) {
            context.commit('EDIT_NICKNAME', value)
        }
    },
}

export default userModule