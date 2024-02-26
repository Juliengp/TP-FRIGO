<template>
  <v-container class="titre">
    FRIGO
  </v-container>
  <AlimentAffich></AlimentAffich>
</template>
<script setup>

import AlimentAffich from "@/components/AlimentAffich.vue";
</script>

<style scoped>

.titre{
  font-family: "Jazz LET", fantasy;
  font-size: 80px;
  color:palevioletred;
  font-weight: bold;
}

</style>


