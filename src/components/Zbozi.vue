<template>


 <v-card>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
  
    <img
      class="white--text align-end obrazek"
      height="200px"
      v-bind:src="`/fotky_projekt_DA/${produkt.images}`"
   />
     

 <v-card-title class="headline" v-text="produkt.nazev"></v-card-title>
    

    <v-card-text class="text--primary" >
      <div>{{produkt.cena}} Kč/den</div>

      <div>{{produkt.mesto}}</div>
    </v-card-text>

    <v-card-actions>
      

      <v-btn
        color="orange"
        text
      >
        Detail
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
.obrazek{
  padding:0px;
}
</style>