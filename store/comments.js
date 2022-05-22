export const state = () => ({
    comments: []
})

export const getters = {
    getComments(state){
        return state.comments
    }
}

export const mutations = {
    setComments(state, response){
        state.comments = response
    }
}

export const actions = {
    FETCH_COMMENTS({commit}, id){
        this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res) => commit('setComments', res)).catch((e) => console.log(e))
    }
}