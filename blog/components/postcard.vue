<template>
  <div 
  class="max-w-sm mx-auto border border-light-red-300 mb-6 w-full md:w-1/2 lg:w-1/2 bg shadow-lg rounded-lg transition duration-100 ease-in-out hover:bg-red-200 transform hover:-translate-y-4 hover:scale-100">
    <img class="object-cover img rounded-t-lg" :src="data.photo" />
    <div class="py-2 px-4">
      <h1 class="text-2xl font-sans">{{ data.title }}</h1>
      <h2 class="leading-snug font-sans">
        <span v-html="data.description"> </span>
        <NuxtLink :to="`/post/${data.id}`" class="text-red-500" >read more</NuxtLink>
      </h2>
    </div>
    <div class="relative flex justify-between px-2 py-1 ">
      <div class="flex position">
      <img class="w-10 h-10 rounded-full border border-2 border-red-200 my-auto" :src="data.author.photo">
     <NuxtLink :to="`/profile/${data.id}`">  <p class="text-sm font-mono my-auto p-2">By {{ data.author.name }}</p></NuxtLink>
      </div>
     
      <button @click="onDelete(data.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "onRefetch", "onDelete"],
};
</script>

<style scoped>
.bg {
  background-color: #fafcfa;
}

.img {
  height: 140px;
  width: 384px;
}
</style>