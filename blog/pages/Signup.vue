<template>
  <div>
      <!-- component -->
<!-- This is an example component -->
 <div class="font-sans">
            <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div class="relative sm:max-w-sm w-full">
                    <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                    <div class="card bg-red-400 shadow-lg   w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                    <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-200 shadow-md">
                        <label for="" class="block text-sm text-gray-700 text-center font-semibold">
                          SignUp
                        </label>
                        <div method="#" action="#" class="mt-10">
                            <div>
                                <input type="name" placeholder="name" class="mt-1 p-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" v-model="name">
                            </div>         
                            <div>
                                <input type="email" placeholder="Email" class="mt-2 p-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" v-model="email">
                            </div>
                            <div class="">                
                                <input type="password" placeholder="password" class="mt-2 p-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" v-model="password">                           
                            </div>
                            <div class="mt-8 flex">
                                <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                                    <span class="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label> 
                            </div>              
                            <div class="mt-8">
                                <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" @click="onSubmit">
                                  SignUp
                                </button>
                            </div>                 
                           <div class="flex mt-8 justify-center w-full">
                                <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    
                                    Facebook
                                </button>
                                <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Google
                                </button>
                            </div>
                
                            <div class="mt-8">
                                <div class="flex justify-center items-center">
                                    <a href="#" class="w-full text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                   <NuxtLink to="/login">Aleardy have an Accotun?LogIn</NuxtLink>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  </div>
</template>

<script>
import {REGISTER_AUTHOR} from '@/gql/query'
export default {
    data(){
        return{
            name:null,
            email:null,
            password:null
        }
    },
     methods:{
     async  onSubmit(){
        try {
          await this.$apollo.mutate({
            mutation: REGISTER_AUTHOR,
            variables: {
                data: {
              name:this.name,
              email: this.email,
              password: this.password}
            },
          })
          this.$router.push('/login')
        } catch (error) {
           console.log(error) 
        }
    }
     }
}
</script>

<style>

</style>