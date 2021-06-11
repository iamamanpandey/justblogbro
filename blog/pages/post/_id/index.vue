<template>
  <div class="max-w-screen-xl mx-auto">
    <div v-if="!post"></div>
    <!--component-->
    <div class="flex flex-row flex-wrap" v-else>
      <div class="text-center pt-6 mx-auto">
        <p class="text-sm md:text-base text-green-500 font-bold">
          08 APRIL 2019 <span class="text-gray-900">/</span> GETTING STARTED
        <h2 class="text-4xl font-semibold leading-tight">
          {{ post.title }}
        </h2>
      </div>

      <div
        class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style="height: 75vh"
      >
        <img :src="post.photo" class="w-full" />
      </div>
      <div class="container max-w-5xl mx-auto -mt-32">
        <div class="mx-0 sm:mx-6">
          <div
            class="bg-white w-full p-8 md:p-16 text-xl md:text-2xl text-gray-800 leading-normal"
            style="font-family: Georgia, serif"
          >
            <!--Post Content-->
            <div class="py-6 ql-editor" v-html="post.description"></div>
            <button
              @click="addlike()" 
                v-bind:class="[addlike==true ?'red' :'blue']"
              class="bg-red-200 p-2 mt-2 border shadow-lg rounded"
            >
              like
            </button>
            <p>{{ post.likecount }}</p>
          </div>

          <div class="flex w-full items-center font-sans p-8 md:p-24">
            <img
              class="w-12 h-12 border border-4 border-black rounded-full mr-4"
              :src="post.author.photo"
              alt="Avatar of Author"
            />
            <div class="flex-1">
              <NuxtLink :to="`/profile/${post.author.id}`">
                <p
                  class="text-base font-bold text-base md:text-xl leading-none"
                >
                  {{ post.author.name }}
                </p></NuxtLink
              >
              <p class="text-gray-600 text-xs md:text-base">
                Tailwind CSS version of Ghost's Casper theme by
              </p>
            </div>
            <div class="justify-end">
              <NuxtLink :to="`/profile/${post.author.id}`">
                <button
                  class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
                >
                  Read More
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_POST_BY_ID, ADD_LIKE } from "@/gql/query";

export default {

 data() {
    return {
     isLiked:false
    };
  },
  apollo: {
    post: {
      query: GET_POST_BY_ID,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      error(error){
        console.log(error);
      }
    }
  },
  methods: {
    async addlike() {
      await this.$apollo.mutate({
        mutation: ADD_LIKE,
        variables: {
          id: this.post.id,
        },
      });
      this.refetchLike();
    },
    refetchLike() {
      this.$apollo.queries.post.refetch();
    }
  }
};
</script>

<style>
.red{
  background: red;
}
.blue{
  background-color: blue;
}
</style>

