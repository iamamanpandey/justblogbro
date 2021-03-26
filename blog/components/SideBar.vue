<template>
  <div>

      <!-- component -->
<!-- This is an example component -->
<div class="min-h-screen sidebar">
  <nav
        class="fixed inset-y-0 left-0 flex flex-col items-center justify-between w-24 h-screen py-6 text-white bg-indigo-700 rounded-r-3xl" >
        <div class="flex flex-col items-center content-center space-y-3">
          <!-- Logo -->
          <a href="#" class="text-2xl font-medium">K-UI</a>
        </div>
        <!-- Links -->
        <ul class="w-full space-y-10">
          <li class="relative flex items-center justify-center text-blue-900 bg-">
            <span class="sr-only">Home</span>
            <div class="absolute top-0 right-0 w-5 h-5 transform -translate-y-full bg-white"></div>
            <div class="absolute top-0 right-0 w-10 h-10 transform -translate-y-full bg-indigo-700 rounded-3xl"></div>
            <a href="#" class="w-full py-2 pl-4 ml-4 bg-white outline-none rounded-l-3xl">
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
            <div class="absolute bottom-0 right-0 w-5 h-5 transform translate-y-full bg-white"></div>
            <div class="absolute bottom-0 right-0 w-10 h-10 transform translate-y-full bg-indigo-700 rounded-3xl"></div>
          </li>
          <li class="relative text-indigo-900 group">
            <span class="sr-only">Settings</span>
            <div
              class="absolute top-0 right-0 hidden w-5 h-5 transform -translate-y-full bg-white group-hover:block"
            ></div>
            <div
              class="absolute top-0 right-0 hidden w-10 h-10 transform -translate-y-full bg-indigo-700 group-hover:block rounded-3xl"
            ></div>
            <a
              href="#"
              class="block py-2 pl-4 ml-4 text-white bg-indigo-700 rounded-l-3xl group-hover:bg-white group-hover:text-indigo-700"
            >
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </a>
            <div
              class="absolute bottom-0 right-0 hidden w-5 h-5 transform translate-y-full bg-white group-hover:block"
            ></div>
            <div
              class="absolute bottom-0 right-0 hidden w-10 h-10 transform translate-y-full bg-indigo-700 group-hover:block rounded-3xl"
            ></div>
          </li>
          <li class="relative text-indigo-900 group">
            <span class="sr-only">Messages</span>
            <div
              class="absolute top-0 right-0 hidden w-5 h-5 transform -translate-y-full bg-white group-hover:block"
            ></div>
            <div
              class="absolute top-0 right-0 hidden w-10 h-10 transform -translate-y-full bg-indigo-700 group-hover:block rounded-3xl"
            ></div>
            <a
              href="#"
              class="block py-2 pl-4 ml-4 text-white bg-indigo-700 rounded-l-3xl group-hover:bg-white group-hover:text-indigo-700"
            >
              <svg
                class="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <div
              class="absolute bottom-0 right-0 hidden w-5 h-5 transform translate-y-full bg-white group-hover:block"
            ></div>
            <div
              class="absolute bottom-0 right-0 hidden w-10 h-10 transform translate-y-full bg-indigo-700 group-hover:block rounded-3xl"
            ></div>
          </li>
        </ul>
        <!-- Footers -->
        <div>
          <button class="p-2 transition-colors rounded-full hover:bg-indigo-900 focus:outline-none focus:ring">
            <span class="sr-only">Logout</span>
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </nav>
</div>

<div class="fixed bottom-5 right-5 flex items-center space-x-4">
  <a href="https://twitter.com/ak_kamona" target="_blank" class="text-blue-600 hover:underline">Twitter</a>
  <a href="https://github.com/Kamona-WD" target="_blank" class="text-blue-600 hover:underline">Github</a>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.group:hover .group-hover\:block {
    display: block;
}

.group:hover .group-hover\:bg-white {
    background-color: #fff;
}

.group:hover .group-hover\:text-indigo-700 {
    color: rgb(67, 56, 202);
}
</style>