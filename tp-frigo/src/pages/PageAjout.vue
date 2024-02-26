<script setup>

import AddAlimentFrigo from "@/components/Ajout.vue";

</script>

<template>
  <v-container class="fond">
    <v-container class="titre"> Remplir frigo </v-container>
    <br><br><br><br><br><br>

    <AddAlimentFrigo />
    <br><br><br><br><br><br>

  </v-container>

</template>

<style scoped>
.titre{
  font-family: "Jazz LET", fantasy;
  font-size: 80px;
  color: darkviolet;
  font-weight: bold;
}

.fond{
  background-color:pink;
  min-height: 800px;
}

</style>
