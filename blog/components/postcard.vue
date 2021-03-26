<template>
  <div class="max-w-sm   mx-auto border border-light-red-300 mb-6 w-full md:w-1/2 lg:w-1/2 bg shadow-lg   rounded-lg transition duration-100 ease-in-out hover:bg-red-200 transform hover:-translate-y-4 hover:scale-100 ">
    <img  class="object-cover w-full img rounded-t-lg" :src="data.photo" />
    <div class="py-2 px-4">
      <h1 class="text-2xl font-sans">{{ data.title }}</h1>
      <p class="leading-snug font-sans  "><span  v-html="data.description"></span></p>
    </div>
    <div class="relative flex justify-between px-2 py-1">
  
      <NuxtLink :to="`/post/${data.id}`">*3 min read</NuxtLink>
      <button @click="onDelete(data.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "onRefetch", "onDelete"],

  methods: {
    async readPost(val) {
      this.$router.push({ path: "/post", params: { pid: val } });
    }

  },
  created(){
    console.log(this.data)
  }
  
};
</script>


<style scoped>
.bg{
 background-color: #fafcfa;
}

</style>