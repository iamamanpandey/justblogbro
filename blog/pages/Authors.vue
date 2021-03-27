<template>
  <div>
    <div class="container mx-auto">
      <div class="item-center relative  justify-center">
        <div class="p-4 flex flex-wrap  ">
          <template v-for="(item, index) in authors" class="">
            <ProfileCard :authprofile="item" :key="index" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";
import { GET_ALL_AUTHOR } from "~/gql/query";
export default {
  components: { ProfileCard },
  apollo: {
    authors: {
      query: GET_ALL_AUTHOR,
      error(error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
