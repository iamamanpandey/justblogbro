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

       <!-- upload bannerrrr -->
  <div class="border border-dashed border-gray-600 bg-gray-200 rounded relative mb-6">
   
      <input type="file" ref="file" accept="image/*" @change="previewPhoto" class="cursor-pointer relative block opacity-0 w-full p-16 z-50">
      <div class="text-center p-8 absolute top-0 right-0 left-0 m-auto">
        <h4>
          Drop files anywhere to upload
          <br />or
        </h4>
        <p>Select Files</p>
      </div>
    </div>


     <div class="flex flex-wrap justify-center mx-auto" >
      <div class="w-1/2 p-2" >   
        <a data-fancybox="gallery" v-if="photo" >
          <img  class="object-cover rounded overflow-hidden" :src="photo">
        </a>
      </div>
   
      
        <button>Remove</button>
      </div>
    </div>
      <quill-editor
        v-model="formData.description"
        ref="myQuillEditor"
        :options="editorOption"
        class="my-6 "
       >
      </quill-editor>
      <div class="buttons flex m-2">
        <div
          class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto hover:bg-red-500 hover:text-white"
          @click="clearData"
        > Cancel
        </div>
        <div
          class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500 hover:bg-indigo-800"
          @click="onSubmit"
        >
          Post
        </div>
      </div>
    </div>

</template>

<script>
import { ADD_POST, UPLOAD_BANNER } from "@/gql/query";
import { quillEditor, Quill } from "vue-quill-editor";
export default {
  props: {
    refetchData: Function,
  },
  data() {
    return {
      formData: {
        title: "",
        description: "",
        photo:null,
        readyToUpload:false,
        file:null,
      },
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
  methods: {
     previewPhoto(event) {
      this.file = event.target.files[0];
      if (this.file.size > 10240 * 1024) {
        alert('File too big (> 1MB)');
      }
      else{
      this.photo=URL.createObjectURL(this.file);
      this.addBanner()
      } 
      },
       async addBanner() {   
          try {
          const res = await this.$apollo.mutate({
            mutation: UPLOAD_BANNER,
            variables: {
              file: this.file
            }
          });
        } catch (error) {
          console.log(error);
        }
      },
     async onSubmit() {
       try {
        console.log(this.formData.description);
        await this.$apollo.mutate({
          mutation: ADD_POST,
          variables: {
            data: this.formData,
          },
        });
        this.clearData();
        this.addBanner();
        this.refetchData();
      } catch (error) {
        console.log(error);
      }
    },
    clearData() {
      this.formData.title = null;
      this.formData.description = null;
    },

  },
};
</script>

<style>
</style>
