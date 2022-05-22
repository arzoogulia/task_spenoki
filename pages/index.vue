<template>
  <div>
    <h1 class="header">All Posts</h1>
    <AllPosts />
  </div>  
</template>

<script>
export default {
  mounted(){
      if(this.$store.state.posts.posts.length === 0)
          this.$store.dispatch('posts/FETCH_ALL_POSTS'),
          this.$store.dispatch('users/FETCH_ALL_USERS')
  }
}
</script>

<style>

.header {
  text-align: center;
}

</style>
