<template>
  <div>
    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">
      New Post
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
       <client-only>
      <quill-editor
        v-model="formData.description"
        ref="myQuillEditor"
        :options="editorOption"
         @change="onEditorChange($event)"
         @blur="onEditorBlur($event)"
         @focus="onEditorFocus($event)"
         @ready="onEditorReady($event)"
     class="edit_container"
      ></quill-editor>
      </client-only>

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
import { ADD_POST } from "@/gql/query";
import dedent from 'dedent'
import {quillEditor} from "vue-quill-editor"; //Call the editor
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css'

export default {
  props: {
    refetchData: Function,
  },
  data() {
    return {
      formData: {
        title: "",
        description: dedent`<p>Example of a very good blog post</p>`,
      },
      file: null,
      editorOption: {
        // Some Quill options...
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          
        }
      }
    }
  },
  components: { quillEditor },
  methods: {
    async onSubmit() {
      try {
        await this.$apollo.mutate({
          mutation: ADD_POST,
          variables: {
            data: this.formData,
            file: this.file,
          },
        });
        this.clearData();
      } catch (error) {
        console.log(error);
      }
      this.$router.push({ path: `/` });
    },
  onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
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
      this.file = null;
    },
  },
};
</script>

