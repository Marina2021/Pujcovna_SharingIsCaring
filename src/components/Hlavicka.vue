<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    > 
    <v-btn icon v-on:click="click" >
        <v-icon>mdi-home</v-icon>
      </v-btn>

      

      <v-toolbar-title>Půjč si</v-toolbar-title>

      

      

     
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    click: function() {
     this.$router.push( { name: `Home` } )
    }
  }

}
</script>

<style>

</style>