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
