<template>
  <div class="max-w-sm animate__backInDown  mx-auto border border-light-red-300 mb-6 w-full md:w-1/2 lg:w-1/2 bg shadow-lg   rounded-lg transition duration-100 ease-in-out hover:bg-red-200 transform hover:-translate-y-4 hover:scale-100 ">
    <img  class="object-cover w-full img rounded-t-lg"  src="https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80"/>
    <div class="py-2 px-4">
      <h1 class="text-2xl font-sans">{{ data.title }}</h1>
      <p class="leading-snug font-sans ">{{ data.description }}</p>
    </div>
    <div class="relative flex justify-between px-2 py-1">
      <img
        class="w-10 h-10  -mt-3 object-cover rounded-full shadow mr-2 cursor-pointer"
        alt="User avatar"
        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
      />
      <NuxtLink :to="`/post/${data.id}`">*3 min read</NuxtLink>
      <button @click="onDelete(data.id)">Delete</button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["data", "onRefetch", "onDelete"],

  methods: {
    async readPost(val) {
      this.$router.push({ path: "/post", params: { pid: val } });
    }
  }
};
</script>


<style scoped>
.bg{
 background-color: #fafcfa;
}

</style>