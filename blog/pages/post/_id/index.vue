<template>
  <div>
        <div v-if="!post"><h1>404 error!</h1></div>
        <div v-else>
            <h1>{{post.title}}</h1>

            </div>
  </div>
</template>

<script>
import Post from '@/components/post';
import {GET_POST_BY_ID} from '@/gql/query'
export default {
    components:{Post},
      apollo:{
    post: {
      query: GET_POST_BY_ID,
      variables(){
          return{
              id:this.$route.params.id
          }
      },
      error(error) {
        console.log(error);
      }
    }
      }
}
</script>

<style>

</style>