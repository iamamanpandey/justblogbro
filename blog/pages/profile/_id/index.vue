<template>
  <div>
    <div v-if="!author"></div>
    <div v-else>
      <div class="container mx-auto my-5 p-5 shadow-lg">
        <h1>{{author.name}}</h1>
        <h2>{{author.email}}</h2>
        
        <h1>posts</h1>

        
        <div v-for="item in author.posts" :key="item.id" class="flex">
          <div class="px-6 py-8">
            <div class="flex justify-between container mx-auto">
              <div class="w-full lg:w-8/12">
                <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                  <div class="flex justify-between items-center">
                    <span class="font-light text-gray-600">Jun 1, 2020</span
                    ><a
                      href="#"
                      class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                      >Laravel</a
                    >
                  </div>
                  <div class="mt-2">
                    <a
                      href="#"
                      class="text-2xl text-gray-700 font-bold hover:underline"
                      >{{ item.title }}</a
                    >
                    <span
                      class="mt-2 text-gray-600 line-clamp"
                      v-html="item.description"
                    ></span>
                  </div>
                  <div class="flex justify-between items-center mt-4">
                    <a href="#" class="text-blue-500 hover:underline"
                      >Read more</a
                    >
                    <p class="text-sm text-grey-100">13 min read</p>
                    <div
                      class="relative flex justify-between px-2 py-1"
                      v-if="author.id == $store.state.user.id"
                     >
                      <button class="p-4 m-2"><NuxtLink :to="`/editpost/${item.id}`"> Edit
                      </NuxtLink></button>
                      <button @click="deletePost(item.id)">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_AUTHOR_BY_ID, DELETE_POST } from "@/gql/query";
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
    refetchData() {
      this.$apollo.queries.author.refetch();
    },

  },
};
</script>

<style scoped>
:root {
  --main-color: #4a76a8;
}

.bg-main-color {
  background-color: var(--main-color);
}

.text-main-color {
  color: var(--main-color);
}

.border-main-color {
  border-color: var(--main-color);
}
.img {
  height: 140px;
  width: 384px;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>