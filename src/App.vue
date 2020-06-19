<template>
  <div id="app">
    <h1>Projekt půjčovna</h1>

    <router-view />

    <hr />
    <router-link to="/">Na úvodní stránku</router-link>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "App",

  components: {
    footer: Footer,
    header: Header
  }
};
</script>
