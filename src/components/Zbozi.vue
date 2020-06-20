<template>


 <v-card :color=blue dark>
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="headline" v-text="porodukt.name"></v-card-title>
        </div>

        <v-avatar class="ma-3" size="64" tile>
         
          <img v-bind:src="require(`./../assets/images/groups/${produkt.image}`)"/>
        </v-avatar>
      </div>
    </v-card>

</template>

<script>

export default {
 props: ["produkt"],
}
</script>

<style>

</style>