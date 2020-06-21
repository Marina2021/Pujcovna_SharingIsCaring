<template>
<<<<<<< HEAD
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img v-bind:src="`/fotky_projekt_DA/${zobrazPolozku.images}`" height="200px"></v-img>

        <v-card-title class="headline" v-text="zobrazPolozku.nazev">
          <div>
            <div class="headline">{{ zobrazPolozku.nazev }}</div>
            <span class="grey--text">{{ zobrazPolozku.cena }}</span>
            <span class="grey--text">{{ zobrazPolozku.mesto }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>{{ zobrazPolozku.mesto }}</v-btn>
          <v-btn flat color="dark blue">Pujčit</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">{{ zobrazPolozku.popis }}</v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>
=======

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
>>>>>>> 53913cf1442fd7d0de1941643c208209c5a084e5
​
<script>
import Data from "@/assets/Data.js";
import Formular from "@/views/Formular.vue";


export default {
  props: ["id"],
  data() {
    return {
      products: Data.products,
    show: false
    }
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