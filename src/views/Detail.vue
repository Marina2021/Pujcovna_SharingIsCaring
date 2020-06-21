<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img v-bind:src="`/fotky_projekt_DA/${zobrazPolozku.images}`" height="200px"></v-img>

        <v-card-title class="headline" v-text="zobrazPolozku.nazev">
          <!--<div>
            <div class="headline">{{ zobrazPolozku.nazev }}</div>
            <span class="grey--text">{{ zobrazPolozku.cena }}</span>
            <span class="grey--text">{{ zobrazPolozku.mesto }}</span>
          </div>-->
        </v-card-title>

        <v-card-subtitle>{{ zobrazPolozku.cena }} Kč/den</v-card-subtitle>
        <v-card-subtitle>{{ zobrazPolozku.mesto }}</v-card-subtitle>
        <v-card-text>{{ zobrazPolozku.popis }}</v-card-text>
        <v-card-actions>
          <!-- <v-btn flat>{{ zobrazPolozku.mesto }}</v-btn> 
          <v-btn flat color="orange">Pujčit</v-btn>-->
          <div class="text-center">
            <v-bottom-sheet v-model="sheet" inset>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="orange" dark v-bind="attrs" v-on="on">Pujčit</v-btn>
              </template>
              <v-sheet class="text-center" height="200px">
                <v-btn class="mt-6" text color="error" @click="sheet = !sheet">close</v-btn>
                <div class="my-3">Tady budou kontaktni detaily majitele</div>
              </v-sheet>
            </v-bottom-sheet>
          </div>
          <v-spacer></v-spacer>
          <!-- <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn> -->
        </v-card-actions>

        <!-- <v-slide-y-transition>
          <v-card-text v-show="show">{{ zobrazPolozku.popis }}</v-card-text>
        </v-slide-y-transition>-->
      </v-card>
    </v-flex>
  </v-layout>
</template>
​
<script>
import Data from "@/assets/Data.js";
import Formular from "@/views/Formular.vue";

export default {
  props: ["id"],
  data() {
    return {
      products: Data.products,
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