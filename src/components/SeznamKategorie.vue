<template>
  
<div>
<kategorie v-for="polozka in kategorie" v-bind:polozka="polozka" v-bind:key="polozka" />
{{ kategorie }}

</div>

</template>

<script>
import Kategorie from "@/components/Kategorie.vue";

export default {
  props: ['kategorie'],

  components: {
    kategorie: Kategorie,
  },

}
</script>

<style>

</style>