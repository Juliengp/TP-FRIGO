<script setup>

import {ref, watch} from "vue";

const nomA=ref('');
const emit=defineEmits(['updateR']);

function searchA(nomA){
  emit('updateR',nomA)
}


watch(nomA, (newValue) => {
  searchA(newValue)
});

</script>

<template>

  <div id="rech">
    <form @submit.prevent="$emit('updateR', nomA)">
      <label class="titre">Chercher dans l'inventaire</label>
      <br><br>
      <input class="Case" type="text" v-model="nomA" placeholder="Nom" required/>
      <br><br>
    </form>
  </div>


</template>

<style scoped>
.titre{
  font-family: "Jazz LET", fantasy;
  font-size: 40px;
  color:darkviolet;
  font-weight: bold;
}
.Case{
  border: 2px groove grey;
}



</style>
