<template>
<div>
  <button v-b-modal.modal-1>
      <router-link to="/" >Back</router-link>
    </button>
  <b-card v-if="singlePost.body" :header="singlePost.title">
    <b-card-text>
      <div>
        <b-card>
          Name: {{ singleUser.name }} 
          <br/> <br/>
          Username: {{ singleUser.username }} 
          <br/> <br/>
          Email Id: {{ singleUser.email }} 
        </b-card>
        
        <b-card>
          Post: {{ singlePost.body }}
        </b-card>
        
        <b-card>
          <div v-for="(comment, index) in fetchComments" :key="comment"> 
            <b-card>
              Comment {{index+1}}:  {{ comment.body }} <br/><br/>
              Comment User Name:  {{ comment.name }} <br/><br/>
              Comment ID:  {{ comment.id }} <br/><br/>
              Comment Email:  {{ comment.email }}
            </b-card>
          </div>
        </b-card>
      </div>
    </b-card-text>
  </b-card>
  <div v-if="!singlePost.body">
    <button class="backBtn" v-b-modal.modal-1>
      <router-link to="/" >Back</router-link>
    </button>
    <b-button class="loader"  disabled>
      <b-spinner small type="grow"></b-spinner>
        No data available...
    </b-button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Post',
  beforeCreate() {
    if(!this.$route.params.id) this.$router.push({name: 'posts'})
  },
  mounted(){
      console.log(this.$route.params)
      if(this.$store.state.posts.posts.length === 0)
          this.$store.dispatch('posts/FETCH_SINGLE_POST', this.$route.params.id)
      this.$store.dispatch('comments/FETCH_COMMENTS', this.$route.params.id)    
      if(this.singlePost)
          this.$store.dispatch('users/FETCH_SINGLE_USER', this.singlePost.userId)
  },
  watch:{
    singlePost(){
      this.$store.dispatch('users/FETCH_SINGLE_USER', this.singlePost.userId)
      this.$store.dispatch('comments/FETCH_COMMENTS', this.$route.params.id)
    },
  },
  beforeDestroy(){
    this.$store.commit('comments/setComments', [])
    this.$store.commit('users/setUsers', [])
  },
  computed:{
    singlePost(){
      return this.$store.state.posts.posts.length === 0 ? this.$store.getters['posts/getSinglePost']
      : this.$store.getters['posts/getPosts'].filter((posts) => posts.id === this.$route.params.id)[0]
    },
    singleUser(){
      return this.$store.state.users.users.length === 0 ? this.$store.getters['users/getSingleUser'] 
      : this.$store.getters['users/getUsers'].filter((users) => users.id === this.singlePost.userId)[0]
    },
    fetchComments(){
      return this.$store.getters['comments/getComments'] 
    }
  }
}
</script>

<style>
/* _id overwrites index file  of post and expects id (anything specified with underscore) */

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  width: 200px;
  height: 100px;
}

.backBtn {
  margin-left: 50px;
  margin-top: 50px;
  width: 100px;
}

</style>

