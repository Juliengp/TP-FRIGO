<template>
  <v-container class="frigo">
    <v-app>

      <v-app-bar
        color="pink"
        density="compact"
      >

        <template v-slot:prepend>

        </template>
        <v-app-bar-title>TP-FRIGO</v-app-bar-title>
        <v-btn to="/">Inventaire</v-btn>
        <v-btn id="menu-recherche" to="/PageAjout">Ajouter</v-btn>
        <v-menu activator="#menu-recherche">
          <v-list>
            <v-list-item to="/PageAjout">
              <v-list-item-title >Element</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <template v-slot:append>
        </template>
      </v-app-bar>

      <v-main>
        <v-container class="page">
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)

</script>
<style scoped>
.page{
  min-height: 100vh;
  text-align: center;
}

.frigo{
  background-image: url("assets/frigo.jpeg");
  background-size: cover;
  background-position: center;
}


</style>
