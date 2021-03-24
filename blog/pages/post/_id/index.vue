<template>
  <div>
 
    <div v-if="!post"></div>
    <div class="mx-auto text-center  w-1/2" v-else>
      <h1>{{ post.title }}</h1>
      <span v-html="post.description"></span>
    </div>
  
  </div>
</template>

<script>
import { GET_POST_BY_ID } from "@/gql/query";
export default {
  apollo: {
    post: {
      query: GET_POST_BY_ID,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      error(error) {
        console.log(error);
      },
    },
  },
};
</script>

<style>
</style>