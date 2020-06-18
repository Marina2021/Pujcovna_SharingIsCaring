<template>
  <div>
    
  
  </div>
</template>

<script>
// @ is an alias to /src

import Data from "@/assets/Data.js";
import Kategorie from "@/components/Kategorie.vue";
import Seznam from "@/components/Seznam.vue";

export default {

  name: "Home",
  components: {
    kategorie:Kategorie,
    seznam:Seznam,
  },

  data() {
    return {
      majitel: Data.majitel,
      kategorie: Data.kategorie
    };
  }
};
</script>
