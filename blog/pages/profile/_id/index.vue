<template>
  <div>
    <div v-if="!author"></div>
    <div class="mx-auto text-center justify-center my-12 max-w-sm" v-else>
    <div class="bg-red-300 max-w-sm shadow-lg ">
      <h1>{{author.name }}</h1>
       <p>{{author.email}}</p>
       </div>
    </div>
  </div>
</template>

<script>
import { GET_AUTHOR_BY_ID } from "@/gql/query";
export default {
  apollo: {
    author: {
      query: GET_AUTHOR_BY_ID,
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

