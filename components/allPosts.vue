<template>
<div>
    <div class="addBtn">
        <create-post/>
    </div>
    
    <b-card @click="getPost" class="card" v-for="post in getAllPosts" :key="post.id" :header="post.title">
        <div v-for="user in getAllUsers" :key="user.id">
            <div v-if="user.id === post.userId">
                <b-card-text>
                    Name: {{ user.name}}
                    <br/>
                    UserName: {{ user.username }}
                    <br/>
                    Email Id: {{ user.email }}
                </b-card-text>
            </div>
        </div>
        <b-card-text>
            Body: {{ post.body}}
        </b-card-text>   
        <a :href="'post/' + post.id">Card Details</a>     
    </b-card>
</div> 
</template>

<script>
import createPost from './createPost.vue';
import _id from '../pages/post/_id.vue';
export default {
  components: { createPost, _id },
  name: 'AllPosts',        
  computed: {
        getAllPosts(){
           return this.$store.getters['posts/getPosts'];
        },
        getAllUsers(){
            return this.$store.getters['users/getUsers'];
        },
        getPost(){
            return this.$store.getters['posts/getSinglePost'];
        }
  },
}
</script>

<style>

.addBtn {
  margin-left: 47%;
  margin-bottom: 20px;
}

.card {
    margin: 10px;
    background-color:rgb(241, 241, 241);
    box-shadow: rgba(0, 0, 0, 0.384) 0px 3px 8px;
}

</style>
