<template>
  <div>
    <div v-if="!post"></div>

    <div class="container mx-auto" v-else>
      <div class="mx-auto text-center">
        <img class="mx-auto w-full" :src="post.photo" />
        <h1 class="text-3xl font-bold text-left my-4">{{ post.title }}</h1>
        <span
          class="font-poppins text-left my-4 mb-4 w-full"
          v-html="post.description"
        ></span>
      </div>

      <div class="my-12">
        <p>this post is created by</p>
        <div class="flex">
          <img
            class="w-12 h-12 rounded-full my-auto"
            :src="post.author.photo"
          />
          <p class="my-auto mx-2">{{ post.author.name }}</p>
        </div>
      </div>
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