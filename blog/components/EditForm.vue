<template>
  <div>
    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
     Edit Post
    </div>
    <div
      class="max-w-full h-full bg-white flex flex-col text-gray-800 border border-gray-300 p-4 shadow-sm hover:shadow-lg"
     >
      <input
        type="file"
        ref="banner"
        accept="image/*"
        @change="previewBanner"
      />

      <input
        class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
        spellcheck="false"
        placeholder="Title"
        type="text"
        v-model="formData.title"
      />

      <quill-editor
        v-model="formData.description"
        ref="myQuillEditor"
        :options="editorOption"
        class="my-6"
      ></quill-editor>

      <div class="buttons flex m-2">
        <div
          class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto hover:bg-red-500 hover:text-white"
          @click="clearData"
         >Cancel
      </div>

        <div
          class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-800"
          @click="onSubmit"
          > Post
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ADD_POST } from "@/gql/query";
import { quillEditor, Quill } from "vue-quill-editor";

export default {
  props: {
    refetchData: Function
  },
  data() {
    return {
      formData: {
        title: "",
        description: ""
      },
      file: null,
      editorOption: {
        // some quill options
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block", "image", "link"]
          ]
        }
      }
    };
  },
  components: { quillEditor },
  methods: {
    async onSubmit() {
      try {
        await this.$apollo.mutate({
          mutation: ADD_POST,
          variables: {
            data: this.formData,
            file: this.file
          }
        });
        this.clearData();
        this.refetchData();
      } catch (error) {
        console.log(error);
      }
    },
    // async uploadbanner() {
    //     try {
    //       const res = await this.$apollo.mutate({
    //         mutation: UPLOAD_BANNER,
    //         variables: {
    //           file: this.file
    //         }
    //       });
    //       console.log(res.data.result)
    //     } catch (error) {
    //       console.log(error);
    //       alert(error);
    //     }
    //   },

    previewBanner(event) {
      this.file = event.target.files[0];
    },

    clearData() {
      this.formData.title = null;
      this.formData.description = null;
    }
  }
};


</script>

