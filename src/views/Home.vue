<template>
  <div>
    <seznamKategorie v-bind:kategorie="kategorie" v-bind:key="kategorie" />

  </div>
</template>

<script>
// @ is an alias to /src

import Data from "@/assets/Data.js";
import SeznamKategorie from "@/components/SeznamKategorie.vue";

export default {
  name: "Home",
  components: {
    seznamKategorie: SeznamKategorie
  },

  data() {
    return {
      majitel: Data.majitel,
      kategorie: Data.kategorie
    };
  }
};
</script>
