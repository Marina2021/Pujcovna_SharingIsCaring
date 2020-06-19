<template>
  
 
 <v-row>
   <zbozi v-for="produkt in products" v-bind:produkt="produkt" v-bind:key= "produkt.id"/>
 </v-row>

</template>

<script>
import Zbozi from "@/components/Zbozi.vue";
export default {
    props: ['zbozi'],

  components: {
    zbozi: Zbozi,
  },

data(){
  return {
      products: Data.products,
      
    }

}
}
</script>

<style>

</style>