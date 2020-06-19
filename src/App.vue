<template>
  <div id="app">
    <h1>Projekt půjčovna</h1>

    <router-view />

    <hlavicka />
    <paticka />
    <hr />
    <router-link to="/">Na úvodní stránku</router-link>
  </div>
</template>

<script>
import Paticka from "@/components/Footer.vue";
import Hlavicka from "@/components/Header.vue";

export default {
  name: "App",

  components: {
    paticka: Paticka,
    hlavicka: Hlavicka
  }
};
</script>
