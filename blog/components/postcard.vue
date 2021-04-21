<template>
  <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
    > <NuxtLink :to="`/post/${data.id}`">
      <img :src="data.photo" class="h-64 w-full rounded-t pb-6" />
      <p class="w-full text-gray-600 text-xs md:text-sm px-6">
        GETTING STARTED
      </p>
     
        <div
          class="w-full font-bold text-xl text-gray-900 px-6 hover:text-red-800"
        >
          {{ data.title }}
        </div>
      <span
        v-html="data.description"
        class="line-clamp text-gray-800 font-serif text-base px-6 mb-5"
      ></span></NuxtLink>

    </div>
    <div
      class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
     >
      <div class="flex items-center justify-between">
        <NuxtLink :to="`/profile/${data.author.id}`">
          <img
            class="w-10 h-10 rounded-full border border-2 border-red-200 my-auto"
            :src="data.author.photo"
          />
         </NuxtLink>
        <p>! min read</p>

      </div>
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
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>