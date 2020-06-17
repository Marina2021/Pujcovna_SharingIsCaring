<template>
 
  <div id="app">
    <h1>Data v šabloně s události</h1>
    
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


export default {
  name: 'App',

  components: {
    Detail, Kategorie
  },

  data (){
    return {
      majitel:Data.majitel,
      kategorie:Data.kategorie
    }
  }
}
   
  
</script>
