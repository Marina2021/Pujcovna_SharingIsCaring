<template>
  
<div>
<kategorie v-for="polozka in kategorie" v-bind:polozka="polozka" v-bind:key="polozka" />

</div>

</template>

<script>
import Home from "@/views/Home.vue";
import Kategorie from "@/components/Kategorie.vue";

export default {
    

  components: {
    home: Home,
    kategorie:Kategorie
  },

}
</script>

<style>

</style>