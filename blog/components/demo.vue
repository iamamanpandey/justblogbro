<template>
  <div>
    <!-- component -->
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Safal Admin Panel</title>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        ></script>
        <script
          nomodule
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine-ie11.min.js"
          defer
        ></script>
      </head>

      <body>
        <div class="flex" style="font-family: Arial;" x-data="{ open: true }">
          <div class="sidebar h-screen" style="width: 260px;" x-show="open">
            <div>
              <div
                class="text-purple-200 bg-purple-700 h-14 mx-auto block px-4 py-5"
              >
                WELCOME, ADMIN
              </div>
              <div class="h-screen bg-purple-700">
                <div class="" style="font-size: 14px;">
                  <a
                    href=""
                    class="h-12 px-4 py-3 text-purple-800 tracking-wider block bg-white font-medium border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
                    >Dashboard</a
                  >
                  <a
                    href=""
                    class="h-12 px-4 py-3 text-white tracking-wider block bg-purple-600 font-thin border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
                    >Products</a
                  >
                  <a
                    href=""
                    class="h-12 px-4 py-3 text-white tracking-wider block bg-purple-600 font-thin border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
                    >Sales</a
                  >
                  <a
                    href=""
                    class="h-12 px-4 py-3 text-white tracking-wider block bg-purple-600 font-thin border-b-2 border-purple-800 hover:text-purple-800 hover:bg-white"
                    >Orders</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full z-10">
            <div
              class="sticky top-0 bg-purple-600 header bg-white h-14 px-10 py-4 border-b-4 border-purple-900 flex items-center justify-between"
            >
              <div class="flex items-center space-x-12 text-sm">
                <i
                  class="hover:text-purple text-xl fas fa-bars font-thin cursor-pointer text-white"
                  @click="open = !open"
                ></i>
                <a
                  href=""
                  class="hover:text-purple-400 text-white  tracking-wider font-thin"
                  ><span>Dashboard</span></a
                >
                <a
                  href=""
                  class="hover:text-purple-400 text-white  tracking-wider font-thin"
                  >User</a
                >
                <a
                  href=""
                  class="hover:text-purple-400 text-white  tracking-wider font-thin"
                  >Settings</a
                >
              </div>
              <div
                class="flex items-center space-x-8 text-gray-400 text-base px-4 py-2"
              >
                <span class="relative inline-block cursor-pointer">
                  <i class="fas fa-bell font-thin"></i>
                  <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center px-1  py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                    >99</span
                  >
                </span>
                <span class="relative inline-block cursor-pointer">
                  <i class="fas fa-list font-thin"></i>
                  <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full"
                    >99</span
                  >
                </span>
                <span class="relative inline-block cursor-pointer">
                  <i class="fas fa-envelope font-thin"></i>
                  <span
                    class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-thin leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full"
                    >9</span
                  >
                </span>
                <i
                  class="fas fa-user-circle fa-lg font-thin cursor-pointer"
                ></i>
                <i
                  class="fas fa-cog fa-2x font-thin text-white cursor-pointer animate animate-spin hover:text-green-500"
                  style="animation-duration: 7000ms;"
                ></i>
              </div>
            </div>
            <div
              class="sticky top-14 header bg-white h-12 px-10 py-4 border-b-2 border-gray-200 flex items-center justify-between"
            >
              <div class="flex items-center space-x-2 text-gray-400 text-base">
                <span class="text-black tracking-wider font-thin text-sm"
                  >Home</span
                >
                <span>/</span>
                <span class="tracking-wide text-sm">
                  <span
                    class="hover:underline cursor-pointer"
                    style="color: #20a8d8; font-weight: 100;"
                    >Admin</span
                  >
                </span>
                <span>/</span>
                <span
                  class="text-black tracking-wider font-thin text-sm text-opacity-50"
                  >Dashboard</span
                >
              </div>
              <div
                class="flex items-center space-x-6 text-gray-400 text-base text-black"
               >
                <i class="fas fa-comment-alt mr-1 text-purple-500"></i>
                <a href="" class="mr-3 text-black">
                  <i class="fas fa-chart-line text-purple-500"></i>
                  <span
                    class="hover:text-purple-400 text-black text-opacity-50 tracking-wider font-thin"
                    >Dashboard</span
                  >
                </a>
                <a href="" class="text-black">
                  <i class="fas fa-cog text-purple-500"></i>
                  <span
                    class="hover:text-purple-400 text-black text-opacity-50 tracking-wider font-thin"
                    >Setting</span
                  >
                </a>
              </div>
            </div>
            <div class="body">
              <div class="p-8" style="background-color: #E4E5E6;">
                <div class="main bg-white border-2 border-gray-300 rounded">
                  <div
                    class="rounded-t border-b-2 border-gray-300"
                    style="background-color: #F0F3F5;"
                   >
                    <h1 class="p-4">Headings</h1>
                  </div>
                  <div class="p-4">
                    <p class="mb-4">
                      Documentation and examples for Bootstrap typography,
                      including global settings, headings, body text, lists, and
                      more.
                    </p>
                    <hr />
                    Heading Example
                    <h1></h1>

                    h1. Bootstrap heading
                    <h2></h2>

                    h2. Bootstrap heading
                    <h3></h3>

                    h3. Bootstrap heading
                    <h4></h4>

                    h4. Bootstrap heading
                    <h5></h5>

                    h5. Bootstrap heading
                    <h6></h6>

                    h6. Bootstrap heading
                  </div>
                </div>
                <div class="main bg-white border-2 border-gray-300 rounded">
                  <div
                    class="rounded-t border-b-2 border-gray-300"
                    style="background-color: #F0F3F5;"
                  >
                    <h1 class="p-4">Headings</h1>
                  </div>
                  <div class="p-4">
                    <p class="mb-4">
                      Documentation and examples for Bootstrap typography,
                      including global settings, headings, body text, lists, and
                      more.
                    </p>
                    <hr />
                    Heading Example
                    <h1></h1>

                    h1. Bootstrap heading
                    <h2></h2>

                    h2. Bootstrap heading
                    <h3></h3>

                    h3. Bootstrap heading
                    <h4></h4>

                    h4. Bootstrap heading
                    <h5></h5>

                    h5. Bootstrap heading
                    <h6></h6>

                    h6. Bootstrap heading
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  </div>
</template>

<script>
</script>


