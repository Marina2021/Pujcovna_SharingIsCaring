<template>

    <v-card >
        <img v-bind:src="`/fotky_projekt_DA/${zobrazPolozku.images}`" />
      <div>
        <!-- <v-avatar class="ma-3" size="64" tile>
        </v-avatar>-->
​
        <v-card-title class="headline" v-text="zobrazPolozku.nazev"></v-card-title>
      </div>
    </v-card>

    
  </template>
​
<script>
import Data from "@/assets/Data.js";
import Formular from "@/views/Formular.vue";


export default {
  props: ["id"],
  data() {
    return {
      products: Data.products
    };
  },
  computed: {
    zobrazPolozku: function() {
      return this.products.filter(
        product => product.id === parseInt(this.id)
      )[0];
    }
  }
};
</script>
<style>
.v-card img {
 width: 100%;
}
</style>