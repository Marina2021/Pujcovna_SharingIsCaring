<template>
  
    <v-col class="col-4">
      <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)" />

      <p>{{polozka.name}}</p>
    </v-col>
  
</template>

<script>
export default {
  props: ["polozka"]
};
</script>

<style>
</style>