<template>
  <div>
    <first />
    <div class="mt-2">
    
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
  </div>
</template>

<script>
import First from "~/components/Home/First.vue";
import { GET_ALL_POST } from "@/gql/query";


export default {
  components: {  First },
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
  },
  computed:{
     refetchData() {
      this.$apollo.queries.posts.refetch();
    },
  }
};
</script>


<style>
 body{
  background-color: #F4F8FB;
}
</style>
