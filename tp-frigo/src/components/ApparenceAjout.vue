<script setup>
defineEmits(['addAli']);
let nom = ""; let qte = ""; let photo = "";
</script>

<template>
  <div class="MiseEnPage">
    <form @submit.prevent="$emit('addAli',nom,qte,photo)" class="bloc">
      <div class="case">
        <input type="text" v-model="nom" placeholder="Nom" required/>
      </div>
      <div class="case">
        <input type="number" v-model="qte" placeholder="Quantité" required min="1"/>
      </div>
      <div class="case">
        <input type="text" v-model="photo" placeholder="Url image"/>
      </div>
      <br> <br>
      <input class ="ajout" type="submit" value=" Ajouter "/>
    </form>
  </div>
</template>

<style scoped>
.MiseEnPage {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bloc {
  display: flex;
  flex-wrap: wrap;
}

.case {
  margin-right: 40px;
  margin-left: 40px;
  border: 1px double blueviolet;
  align-items: center;
  height: 25px;
}

.ajout{
  margin-right: 40px;
  margin-left: 40px;
  align-items: center;
  height: 30px;
  background-color: hotpink;
}


</style>
