<template>


 <v-card :color=blue dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="headline" v-text="produkt.nazev"></v-card-title>
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