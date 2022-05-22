export const state = () => ({
    users: [],
    singleUser: [],
})

export const getters = {
    getUsers(state){
        return state.users
    },
    getSingleUser(state){
        return state.singleUser
    }
}

export const mutations = {
    setUsers(state, response){
        state.users = response
    },
    setSingleUser(state, response){
        state.singleUser = response
    }
}

export const actions = {
    FETCH_ALL_USERS({commit}){
        this.$axios.$get('https://jsonplaceholder.typicode.com/users').then((res) => commit('setUsers', res)).catch((e) => console.log(e))
    },

    FETCH_SINGLE_USER({commit}, id){
        this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => commit('setSingleUser', res)).catch((e) => console.log(e))
    },

}