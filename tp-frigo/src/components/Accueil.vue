<template>
  <v-container class="titre">
    FRIGO
  </v-container>
  <AffichElement></AffichElement>
</template>
<script setup>

import AffichElement from "@/components/Inventaire.vue";
</script>

<style scoped>

.titre{
  font-family: "Jazz LET", fantasy;
  font-size: 80px;
  color:palevioletred;
  font-weight: bold;
}

</style>


