<template>
  <div>
    <div
      v-for="item in data"
      :key="item.id"
      class="max-w-sm rounded overflow-hidden shadow-lg my-2"
    >
      <img
        class="w-full"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ item.title }}</div>

        <p class="text-grey-darker text-base">{{ item.description }}</p>
      </div>

      <div class="flex justify-between">
        <button class="bg-indigo-500 text-white p-4 m-4 rounded-lg">
          Edit
        </button>
        <button
          class="bg-red-500 text-white p-4 text-center m-4 rounded-lg"
          @click="onDelete(item.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'onRefetch', 'onDelete']
};
</script>

<style>
</style>