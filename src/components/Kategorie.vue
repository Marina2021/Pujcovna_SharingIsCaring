<template>
  <v-col class="col-4">
    <v-card :color="blue" dark>
      <router-link to="/zbozi">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="polozka.name"></v-card-title>
          </div>

          <v-avatar class="ma-3" size="64" tile>
            <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)" />
          </v-avatar>
        </div>
      </router-link>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["polozka"]
};
</script>

<style>
</style>