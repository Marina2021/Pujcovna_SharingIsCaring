<template>
  <div id="app">
    <hlavicka />
    <router-view />
 
    
    
  </div>
</template>

<script>
import Paticka from "@/components/Paticka.vue";
import Hlavicka from "@/components/Hlavicka.vue";

export default {
  name: "App",

  components: {
    paticka: Paticka,
    hlavicka: Hlavicka
  }
};
</script>
