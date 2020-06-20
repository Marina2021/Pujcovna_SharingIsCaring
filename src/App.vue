<template>
  <v-app>
    <hlavicka />
    <router-view />
 
    
    
  </v-app>
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
