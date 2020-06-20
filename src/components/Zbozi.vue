<template>


 <v-card>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
  
    <v-img
      class="white--text align-end"
      height="200px"
      src="/fotky_projekt_DA/elektro/mixer.jpg"
    >
      <v-card-title class="headline" v-text="produkt.nazev"></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{produkt.nazev}}</v-card-subtitle>

    <v-card-text class="text--primary" >
      <div>{{produkt.cena}} Kč/den</div>

      <div>{{produkt.majitel}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  
          
        </div>

        <v-avatar class="ma-3" size="64" tile>
         
          
        </v-avatar>
      </div>
    </v-card>

</template>

<script>
//<img v-bind:src="require(`./public/images/${produkt.image}`)"/>
export default {
 props: ["produkt"],
}
</script>

<style>

</style>