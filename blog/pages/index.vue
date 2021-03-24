<template>
  <div> 
   <first/>
<second/>
<why/>
<third/>


  </div>
</template>

<script>
import First from '~/components/Home/First.vue'
import Third from '~/components/Home/Third.vue'
import Why from '~/components/Home/why.vue'
import Second from '../components/Home/Second.vue'

export default {
  components: {  Second, First, Third, Why },

  
}
   </script>

