<template>
  <div>
    <div>
      <v-col class="col-6">
        <v-card dark v-on:click="click">
          <div class="vyska">
            <v-avatar class="ma-3" size="64" tile>
              <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)" />
            </v-avatar>

            <div>
              <v-card-title class="headline" v-text="polozka.name"></v-card-title>
            </div>
          </div>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
    props: ["polozka"]
    
};
</script>

<style>
</style>