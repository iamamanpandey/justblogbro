<template>
  <div>
    <div class="mx-auto text-center">
      <h1 class="text-4xl font-bold text-red-400">JustBlogBro</h1>
      <p class="text-sm text-grey-200">
        --*write to create a bright future broooo*--
      </p>
  
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
   refetchData() {
        this.$apollo.queries.posts.refetch()
}
}
}


 
</script>

<style>
</style>