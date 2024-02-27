<script setup>

import {ref, watch} from "vue";

const nomMC=ref('');
const emit=defineEmits(['modif']);

function rechercheMC(nomMC){
  emit('modif',nomMC)
}


watch(nomMC, (newValue) => {
  rechercheMC(newValue)
});

</script>

<template>

  <div id="rech">
    <form @submit.prevent="$emit('modif', nomMC)">
      <label class="titre">Chercher dans l'inventaire</label>
      <br><br>
      <input class="Case" type="text" v-model="nomMC" placeholder="Nom" required/>
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
