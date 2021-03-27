<template>
  <!-- class="fixed w-full z-50" -->
  <div class="sticky top-0 z-50">
    <div class="hidden lg:block">
      <header class="relative z-10 border-b border-gray-200 bg-white ">
        <div
          class="xl:container mx-auto flex items-center  px-4 py-4 sm:px-6 lg:px-8"
        >
          <div class="flex items-center ">
            <div class="flex flex-row ">
              <nuxt-link to="/" class="block">
                <img class="h-14 w-12" src="logo.jpg" alt="Tailwind UI" />
              </nuxt-link>
              <nuxt-link
                to="/"
                class="font-medium text-gray-700 hover:text-gray-900 sm:ml-16"
               >
                Home
              </nuxt-link>
              <nuxt-link
                to="/aboutus"
                class="font-medium text-gray-700 hover:text-gray-900 sm:ml-8"
               >
                About Us
              </nuxt-link>
              <nuxt-link
                to="/posts"
                class="ml-4 font-medium text-gray-700 hover:text-gray-900 sm:ml-8"
               >
                Posts
              </nuxt-link>
              <nuxt-link
                to="/contactus"
                class="ml-4 font-medium text-gray-700 hover:text-gray-900 sm:ml-8"
               >
                Contact Us
              </nuxt-link>
              <nuxt-link
                to="/authors"
                class="ml-4 font-medium text-gray-700 hover:text-gray-900 sm:ml-8"
               >
                Authors
              </nuxt-link>
             </div>
            <div class="flex justify-end ml-64">
              <div class="flex" v-if="!isLoggedIn">
                <nuxt-link to="/login">
                  <button
                    data-fancybox
                    data-src="#loginModal"
                    class="w-1/2 flex items-center justify-center px-4 py-3 border border-transparent rounded shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900"
                  >
                    Log In
                  </button></nuxt-link
                 >
              </div>

              <div class="flex" v-if="isLoggedIn">
                <p class="my-auto mx-4">{{ $store.state.user.name }}</p>
                <nuxt-link to="/login">
                  <button
                    @click="onlogout"
                    data-fancybox
                    data-src="#loginModal"
                    class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900"
                  >
                    Log out
                  </button></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="lg:hidden">
      <header class="relative z-20 border-b border-gray-200 bg-white px-4 py-4">
        <div class="flex justify-between">
          <nuxt-link to="/" class="block">
            <img class="h-8 w-auto" alt="Logo" />
          </nuxt-link>

          <button
            @click="changeMenu"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded:sm inline-flex items-center focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <div
          class="absolute top-0 inset-x-0 transition transform origin-top-right"
          v-if="openMenu"
        >
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" alt="Logo" />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    @click="changeMenu"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close menu</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <nuxt-link
                    to="/"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  >
                    <!-- Heroicon name: chart-bar -->
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </nuxt-link>

                  <nuxt-link
                    to="/aboutus"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </nuxt-link>

                  <nuxt-link
                    to="/posts"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  >
                    <!-- Heroicon name: shield-check -->
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Courses
                    </span>
                  </nuxt-link>

                  <nuxt-link
                    to="/contactus"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Contact
                    </span>
                  </nuxt-link>

                  <nuxt-link
                    to="/authors"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-200"
                  >
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-900">
                      Authors
                    </span>
                  </nuxt-link>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6" v-if="!isLoggedIn">
              <div>
                <button
                  to="/login"
                  data-fancybox
                  data-src="#loginModal"
                  class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900"
                >
                  Log In
                </button>
              </div>
            </div>
            <div class="pt-4 pb-3" v-if="isLoggedIn">
              <div class="flex items-center px-5 space-x-3">
                <p class="mt-3 mx-2">welcome {{ $store.state.user.name }}</p>
                <button
                  to="/login"
                  data-fancybox
                  data-src="#loginModal"
                  @click="onlogout"
                  class="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false
    };
  },

  methods: {
    changeMenu() {
      console.log("clicked change menu");
      this.openMenu = !this.openMenu;
    },
    hide() {
      this.openMenu = false;
    },
    onlogout() {
      this.$store.commit("logoutUser");
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isAuthenticated;
    }
  }
};
</script>
