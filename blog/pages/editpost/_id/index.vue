<template>
  <div>
    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
      Edit Post
    </div>
    
    <div
      class="max-w-xl mx-auto h-full bg-white flex flex-col text-gray-800 border border-gray-300 p-4 shadow-sm hover:shadow-lg"
     >
      <input
        type="file"
        ref="banner"
        accept="image/*"
        @change="previewBanner"
      />
      <div class="m-2"></div>

      <input
        class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        spellcheck="false"
        placeholder="Title"
        type="text" 
        v-model="post.title"
        />

      <quill-editor
        v-model="post.description"
        ref="myQuillEditor"
        :options="editorOption"
        class="my-6"
      ></quill-editor>

      <div class="buttons flex m-2">
        <div
          class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto hover:bg-red-500 hover:text-white"
          @click="clearData"
        >
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
import { UPDATE_POST, GET_POST_BY_ID } from "@/gql/query";
import { quillEditor, Quill } from "vue-quill-editor";

export default {
  props: {
    refetchData: Function,
  },
  data() {
    return {
        post:{
            tittle:"",
            description:""
        },
     
      file: null,
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block", "image", "link"],
          ],
        },
      },
    };
  },
  components: { quillEditor },
  
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const post = (await client.query({
        query: GET_POST_BY_ID,
        variables: {
          id: context.route.params.id
        }
      })).data.post;
      return {
        post
      };
    },

  methods: {
    async onSubmit() {
      try {
        await this.$apollo.mutate({
          mutation: UPDATE_POST,
          variables: {
              id:this.post.id,
            data: {
             title:this.post.title,
             description:this.post.description
            }
          },
        });
      } catch (error) {
        console.log(error);
      }
     this.$router.push({ path: `/post/${this.post.id}` })
    },
    previewBanner(event) {
      this.file = event.target.files[0];
    },
    clearData() {
      this.post.title = null;
      this.post.description = null;
    },
  },
 
};
</script>

