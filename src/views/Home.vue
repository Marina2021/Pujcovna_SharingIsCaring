<template>
  <div>
    <kategorie v-for="polozka in kategorie" v-bind:polozka="polozka" v-bind:key="polozka" />
  
  </div>
</template>

<script>
// @ is an alias to /src

import Data from "@/assets/Data.js";
import Kategorie from "@/components/Kategorie.vue";

export default {
  name: "Home",
  components: {
    kategorie: Kategorie
  },

  data() {
    return {
      majitel: Data.majitel,
      kategorie: Data.kategorie
    };
  }
};
</script>
