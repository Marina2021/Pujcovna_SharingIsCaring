<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="mobil"
      :error-messages="nameErrors"
      :counter="10"
      label="Mobil"
      required
      @input="$v.mobil.$touch()"
      @blur="$v.mobil.$touch()"
    ></v-text-field>
   
   
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Souhlasím s podmínkami"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

<a href="/fotky_projekt_DA/GDPR.pdf"
      target="_blank"
      rel="noopener noreferrer">Podmínky a GDPR</a>
 


    <v-btn v-on:click="odklikni" class="mr-4" @click="submit">půjčit</v-btn>
    
  </form>
</template>

<script>
 

export default {
props: ["id"],

  data() {
    return {
      products: [Data.products]
    };
  },
methods:{
  odklikni: function() {
 alert("Požadavek byl odeslán majiteli"); 
} 

},

  
  computed: {
    zobrazPolozku: function() {
      return this.products.filter(
        product => product.id === parseInt(this.id)
      )[0];
    }
  }

}

</script>

<style>
</style>