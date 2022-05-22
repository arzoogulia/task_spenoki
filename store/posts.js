export const state = () => ({
    posts: [],
    singlePost: [],
})

export const getters = {
    getPosts(state){
        return [...state.posts].reverse()
    },
    getSinglePost(state){
        return state.singlePost
    }
}

export const mutations = {
    setPosts(state, response){
        state.posts = response
    },
    setSinglePost(state, response){
        state.singlePost = response
    },
    addPost(state, response) {
        state.posts.push(response)
    }
}

export const actions = {
    FETCH_ALL_POSTS({commit}){
        this.$axios.$get('https://jsonplaceholder.typicode.com/posts').then((res) => commit('setPosts', res)).catch((e) => console.log(e))
    },

    CREATE_NEW_POST({commit}, payload){
        console.log(payload);
        this.$axios.$post('https://jsonplaceholder.typicode.com/posts',payload).then((res) => {
            commit('addPost', res)
        }).catch((e) => console.log(e))
        console.log('payload', payload)    
    },

    FETCH_SINGLE_POST({commit}, id){
        this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => commit('setSinglePost', res)).catch((e) => console.log(e))
    },

}