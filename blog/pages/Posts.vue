<template>
  <div>
    <div class="mx-auto text-center">

      <div class="flex justify-end p-4" v-if="$store.state.isAuthenticated">
        <p class="mt-3 mx-2">welcome {{ $store.state.user.name }}</p>
        <button  class="bg-blue-500 px-4 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:bg-red-500 "
          @click="onLogOut">Logout</button>
      </div>
     
      <NuxtLink to="/login" v-else><button class="bg-blue-500 px-4 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"> Login </button></NuxtLink>
    </div>
     <div class="w-1/2 mx-auto">
        <Form :refetchData="refetchData"/>
    </div>
        <div class="container mx-auto">
            <div class="item-center relative  justify-center">
        <div class="p-4 flex flex-wrap  ">
        <template v-for="(item, index) in posts" class="">
          <Postcard :data="item" :onRefetch="refetchData" :onDelete="deletePost" :key="index" />
        </template>
      </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DELETE_POST, GET_ALL_POST } from "@/gql/query";

export default {
  apollo: {
    posts: {
      query: GET_ALL_POST,
      error(error) {
        console.log(error);
      },
    },
  },
  methods: {
    async deletePost(id) {
      await this.$apollo.mutate({
        mutation: DELETE_POST,
        variables: {
          id: id,
        },
      });
      alert("post has been deleted");
      this.refetchData();
    },
    onLogOut() {
      this.$store.commit("logoutUser");
    },
    refetchData() {
      this.$apollo.queries.posts.refetch();
    },
  },
};
</script>

<style>
body{
  background-color: #fdf8f5;
}
</style>