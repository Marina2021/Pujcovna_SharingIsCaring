<template>
  <div>
    <div>
      <v-col class="col-6">
        <v-card dark v-on:click="click">
          <div class="vyska">
            <v-avatar class="ma-3" size="64" tile>
              <img v-bind:src="require(`./../assets/images/groups/${zobrazPolozku.image}`)" />
            </v-avatar>
x
            <div>
              <v-card-title class="headline" v-text="zobrazPolozku.name"></v-card-title>
            </div>
          </div>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
   computed: {
   zobrazPolozku: function() {
      let polozka = this.products.filter(product => (product.id === parseInt(this.id)));
      return zbozi;
    }
  }
};
</script>
<style>
</style>