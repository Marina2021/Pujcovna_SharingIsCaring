<template>
  <div>
<<<<<<< HEAD
    <v-card>
      <div>
        <!-- <v-avatar class="ma-3" size="64" tile>
        </v-avatar>-->
        <img v-bind:src="`/fotky_projekt_DA/${zobrazPolozku.images}`" />
​
        <v-card-title class="headline" v-text="zobrazPolozku.nazev"></v-card-title>
      </div>
    </v-card>
=======
    <div>
      <v-col class="col-6">
        <v-card dark v-on:click="click">
          <div class="vyska">
            <v-avatar class="ma-3" size="64" tile>
              <img v-bind:src="require(`./../assets/images/groups/${zobrazPolozku.image}`)" />
            </v-avatar>
x
            <div>
              <v-card-title class="headline" v-text="zobrazPolozku.name"></v-card-title>
            </div>
          </div>
        </v-card>
      </v-col>
    </div>
>>>>>>> 6166d838a306a2c32b85d75ccc221dab0d277570
  </div>
</template>
​
<script>
import Data from "@/assets/Data.js";
​
export default {
<<<<<<< HEAD
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
=======
   computed: {
   zobrazPolozku: function() {
      let polozka = this.products.filter(product => (product.id === parseInt(this.id)));
      return zbozi;
>>>>>>> 6166d838a306a2c32b85d75ccc221dab0d277570
    }
  }
};
</script>
<style>
</style>