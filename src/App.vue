<template>
 
  <div id="app">
    <h1>Projekt půjčovna</h1>
    
    <router-view />

    <hr />
    <router-link to="/">Na úvodní stránku</router-link>
  
</div>
  
</template>

<script>
import Detail from './components/Detail';
import Data from './assets/Data';
import Home from './views/Home';
import Kategorie from './components/Kategorie';
import Seznam from './components/Seznam';

export default {
  name: 'App',

  components: {
    detail:Detail, 
    kategorie:Kategorie, 
    seznam:Seznam
  },

  data (){
    return {
      majitel:Data.majitel,
      kategorie:Data.kategorie
    }
  }
}
   
  
</script>




// auto-moto
// <span class="material-icons">
// directions_car
// </span>

// dum a zahrada
// <span class="material-icons">
// home
// </span>

// electro
// <span class="material-icons">
// electrical_services
// </span>

// naradi
// <span class="material-icons">
// construction
// </span>

// obleceni
// <span class="material-icons">
// construction
// </span>

// ostatni
// <span class="material-icons">
// devices_other
// </span>

// pro deti
// <span class="material-icons">
// child_care
// </span>

// sport
// <span class="material-icons">
// directions_bike
// </span>

// stroje
// <span class="material-icons">
// engineering
// </span>