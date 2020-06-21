<template>

<div class="col-6">
 <v-card v-on:click="click">
      <!-- <div class="d-flex flex-no-wrap justify-space-between">
        <div>
  <div class="img-container"> -->
    <img
      class="white--text align-end obrazek"
      height="200px"
      v-bind:src="`/fotky_projekt_DA/${produkt.images}`"
   />
  <!-- </div> -->
     

 <v-card-title class="headline" v-text="produkt.nazev"></v-card-title>
    

    <v-card-text class="text--primary" >
      <div>{{produkt.cena}} Kč/den</div>

      <div>{{produkt.mesto}}</div>
    </v-card-text>

    <v-card-actions>
      <!-- <v-btn v-on:click="click" color="orange" text>Detail</v-btn> -->
    </v-card-actions>
        <!-- </div> -->
      
    
      

        <!-- <v-avatar class="ma-3" size="64" tile>
         
          
        </v-avatar> -->
      <!-- </div> -->
    </v-card>
</div>
</template>

<script>
//<img v-bind:src="require(`./public/images/${produkt.image}`)"/>
export default {
 props: ["produkt"],
methods: {
   click: function() {
     this.$router.push({ name: `Detail`, params: { id: this.produkt.id } })
    }
  }
}
</script>

<style>
.obrazek{
  width:120px;
  height:auto;
  max-height:128px;
  margin-right:auto;
  margin-left:auto;
}
.img-container{
  height:130px;
  padding:5px;
}
</style>