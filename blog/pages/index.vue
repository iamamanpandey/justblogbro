<template>
  <div>
    <div class="mx-auto text-center">
        <h1 class="text-4xl font-bold text-red-400">Social Media</h1>
        <p class="text-sm text-grey-200">
        explore the degital world 
        </p>
        <div v-if="$store.state.isAuthenticated">
          <p>welcome {{$store.state.user.name}}</p>
        <button class="bg-blue-500 px-4 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" @click="onLogOut" >Logout</button>
        </div>
        <NuxtLink to="/login" v-else><button class="bg-blue-500 px-4 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">Login</button></NuxtLink>
   
    </div>
    
    <div class="flex justify-between">
      <div class="m-2">
        <Posts  :data="posts" :onRefetch="refetchData" :onDelete="deletePost" />
      </div>

      <div class="w-1/4 mx-12">
        <Form  :refetchData="refetchData"/>
      </div>
    </div>


  </div>
</template>

<script>
import {DELETE_POST, GET_ALL_POST} from '@/gql/query'

export default {
 apollo: {
    posts: {
      query: GET_ALL_POST,
      error(error) {
        console.log(error);
      },
    },
  },
  methods:{
   async deletePost(id){
        await this.$apollo.mutate({
          mutation : DELETE_POST,
          variables:{
          id:id
          }  
        })
        alert('post has been deleted')
        this.refetchData();
    },
    onLogOut(){
  this.$store.commit('logoutUser');
    },
   refetchData() {
        this.$apollo.queries.posts.refetch()
}
}
}


</script>

<style>
body{
  background-color: #F5F7F8;
}
</style>