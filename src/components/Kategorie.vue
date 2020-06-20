<template>
  <v-col class="col-4">
    <v-card dark v-on:click="click">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="headline" v-text="polozka.name"></v-card-title>
        </div>

        <v-avatar class="ma-3" size="64" tile>
          <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)" />
        </v-avatar>
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
</style>