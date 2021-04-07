<template>
  <div>
    <div class="mx-auto text-center">
      <div class="flex justify-end p-4" v-if="$store.state.isAuthenticated">
       
        <img class="rounded-full  w-12 h-12 mx-10 object-cover animate-pulse ring ring-pink-600 ring-offset-4 "  :src="$store.state.user.photo"/>
        <button
          class="bg-blue-500 px-4 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:bg-red-500"
          @click="onLogOut">
          Logout
        </button>
      </div>
      <NuxtLink to="/login" v-else
        ><button
          class="bg-blue-500 px-4 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
        >
          Login
        </button></NuxtLink
      >
    </div>
    <div class="w-1/2 mx-auto">
      <Form :refetchData="refetchData" />
    </div>
    <div class="container mx-auto">
      <div class="item-center relative justify-center">
        <div class="p-4 flex flex-wrap">
          <template v-for="(item, index) in posts" class="">
            <Postcard
              :data="item"
              :onRefetch="refetchData" 
              :key="index"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ALL_POST } from "@/gql/query";
import SideBar from "~/components/SideBar.vue";

export default {
  components: { SideBar },
  apollo: {
    posts: {
      query: GET_ALL_POST,
      error(error) {
        console.log(error);
      },
    },
  },
  methods: {
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
body {
  background-color: #fff;
}
</style>