<template>
  <div>
    <first />
    <second />
 
  </div>
</template>

<script>
import First from "~/components/Home/First.vue";

import Second from "../components/Home/Second.vue";

export default {
  components: { Second, First },
};
</script>

