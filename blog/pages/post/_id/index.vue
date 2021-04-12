<template>
  <div class="max-w-screen-xl mx-auto">
    <div v-if="!post"></div>

    <!--component-->
    <div class="flex flex-row flex-wrap" v-else>
      <div class="mx-auto">
        <img
          :src="post.photo"
          style="height: 24em"
          class="mb-4 md:mb-0 w-full max-w-screen-md relative"
        />
        <div
          class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed"
          >
          <h2 class="text-4xl font-semibold leading-tight">{{post.title}}</h2>
          <span class="py-6"  v-html="post.description"></span>
          <div>

            <button  @click="addlike()" class="bg-red-200 p-2 border shadow-lg rounded" >like</button>
            <p>{{post.likecount}}</p>
          </div>
        </div>
        <div class="my-12">
          <p>this post is created by</p>
          <div class="flex">
            <NuxtLink :to="`/profile/${post.author.id}`" class="text-red-500">
              <img
                class="w-12 h-12 rounded-full my-auto"
                :src="post.author.photo"
              />
              <p class="my-auto mx-2">{{ post.author.name }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_POST_BY_ID, ADD_LIKE } from "@/gql/query";

export default {
  apollo: {
    post: {
      query: GET_POST_BY_ID,
      variables() {
        return {
          id: this.$route.params.id
        };
      },
      error(error) {
        console.log(error);
      }
    }
      },
 methods: {
     async addlike() {
      await this.$apollo.mutate({
        mutation: ADD_LIKE,
        variables: {
          id:this.post.id
        }
      });
      this.refetchLike();
    },
     refetchLike() {
      this.$apollo.queries.post.refetch();
    },
    isLiked(){
    
    }
  },

};
</script>

<style></style>
