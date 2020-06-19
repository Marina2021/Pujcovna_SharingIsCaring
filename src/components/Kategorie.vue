<template>
  <div>

   <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)"/>

<p>{{polozka.name}}</p>


  </div>
</template>

<script>
export default {
    props:["polozka"]



}


</script>

<style>

</style>