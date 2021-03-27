<template>
  <div>
    <!-- component -->
     <NuxtLink :to="`/profile/${authprofile.id}`">
    <div
      class="max-w-sm   mx-auto border border-green-300 mb-6 w-full md:w-1/2 lg:w-3/4 bg shadow-lg   rounded-lg transition duration-100 ease-in-out hover:bg-green-200 transform hover:-translate-y-4 hover:scale-100 "
     >
      
        <img
          class="w-full"
          :src="authprofile.photo"
          alt="Profile image"
        /> 
     
      <div class="pt-6 pb-8 text-gray-600 text-center">
         <div class="text-center text-xl font-bold  w-full" style="bottom: 4rem">
          <p class="text-black tracking-wide uppercase text-lg font-bold">
            {{ authprofile.name }}
          </p>

          <p class="text-gray-400 text-sm">{{ authprofile.email }}</p>
        </div>
        <p>Fullstack Developer</p>
        <p class="text-sm">Coding from Planet Earth</p>
     
      </div>
    </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["authprofile"]
};
</script>
