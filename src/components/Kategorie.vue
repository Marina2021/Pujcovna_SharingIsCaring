<template>

  <v-col class="col-6">
    <v-card v-bind:color="polozka.barva" dark v-on:click="click">
      <div class="vyska">
        

        <v-avatar class="ma-3" size="64" tile>
          <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)" />
        </v-avatar>

        

        <div>
          <v-card-title class="text" v-text="polozka.name"></v-card-title>
        </div>
      </div>
    </v-card>
  </v-col>

</template>

<script>
export default {
  props: ["polozka"],
  methods: {

    click: function() {
     this.$router.push({ name: `Zbozi`, params: { id: this.polozka.id } })
    }
  }
};
</script>

<style>

.vyska{
  flex:box;
  flex-direction:column;

}

.headline{
  font-size:5px;
  padding: 5px;
}


</style>