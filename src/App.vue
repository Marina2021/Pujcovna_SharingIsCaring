<template>
  <div id="app">
      <router-view />

    <hlavicka />
    <paticka />
    <hr />
    <router-link to="/">Na úvodní stránku</router-link>
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
