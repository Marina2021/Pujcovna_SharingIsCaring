<template>
  <v-app>
    <hlavicka />
    <router-view class="horniOdstup" />
 
    
    
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

<style scoped>

.horniOdstup {
  padding: 30px;
}

</style>
