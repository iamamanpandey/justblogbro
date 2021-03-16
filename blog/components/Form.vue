<template>
  <div>
    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
      New Post
    </div>

    <div
      class="max-w-full h-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-sm hover:shadow-lg"
    >
      <input
        class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        spellcheck="false"
        placeholder="Title"
        type="text"
        v-model="formData.title"
      />
      <textarea
        class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
        spellcheck="false"
        placeholder="Describe everything about this post here"
        v-model="formData.description"
      ></textarea>

      <!-- buttons -->
      <div class="buttons flex m-2">
        <div
          class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto hover:bg-red-500 hover:text-white"
       @click="clearData" >
          Cancel
        </div>
        <div
          class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-800"
          @click="onSubmit"
        >
          Post
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ADD_POST } from "@/gql/query";
export default {
  props: {
    refetchData: Function,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$apollo.mutate({
          mutation: ADD_POST,
          variables: {
            data: this.formData,
          },
        })
        this.clearData();
        this.refetchData();
      } catch (error) {
        console.log(error);
      }
    },
    clearData(){
        this.formData.title= null;
        this.formData.description= null;
    }
  },
};
</script>

<style>
</style>
