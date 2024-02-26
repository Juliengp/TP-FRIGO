<script setup>

import {onMounted, reactive, watch} from "vue";
import Aliment from "@/Element";
import AlimentList from "@/components/Recherche.vue";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/11/produits";
const listeAli = reactive([]);

let nomA ='';

function affichAli() {
  fetch(url+ `?search=`+ nomA)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeAli.splice(0,listeAli.length)
      for(let aliment of dataJSON){
        listeAli.push(new Aliment(aliment.id, aliment.nom, aliment.qte, aliment.photo))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
onMounted( () => {
  affichAli();
})

function updateR(n){
  nomA=n
  affichAli()
}

async function addOne(aliment){
  aliment.actual_qte++;
  await updateQuantity(aliment);
}

async function removeOne(aliment){
  if (aliment.actual_qte > 0) {
    aliment.actual_qte--;
    await updateQuantity(aliment);
  }else {
    console.log("Quantité déjà à zéro");
    alert("Quantité déjà nulle")
  }
}

async function updateQuantity(aliment) {
  const fetchOptions = {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({id: aliment.id, qte: aliment.actual_qte})
  };
  try {
    const response = await fetch(url, fetchOptions);
    const dataJSON = await response.json();
    console.log(dataJSON);
    affichAli();
  } catch (error) {
    console.error(error);
  }
}


function deleteAli(idAliment) {
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(url+"/"+idAliment, fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      affichAli();
    })
    .catch((error)=> console.log(error));
}


</script>

<template>
  <div>
    <AlimentList @updateR="updateR"/>
  </div>

  <v-row dense>
    <v-col
      v-for="aliment in listeAli"
      :key="aliment.id"
      cols="12"
      sm="6"
      md="3"
      lg="2"
      xl="2">
      <v-card color="pink">
        <v-img
          :src="aliment.photo"
        ></v-img>
        <v-card-title>
          {{ aliment.nom }} : {{ aliment.actual_qte }}
        </v-card-title>
        <v-btn class="soustrait" @click="removeOne(aliment)">
          -
        </v-btn>
        <v-btn class="ajout" @click="addOne(aliment)">
          +
        </v-btn>
        <v-btn class="retirer" @click="deleteAli(aliment.id)"> Supp </v-btn>
      </v-card>
    </v-col>
  </v-row>


</template>

<style scoped>
.image{
  width: 400px;
  height: 300px;
}

.soustrait{
  color: deeppink;
  border-width: 2px;
  margin-right:20px;
  float: left;
}
.ajout{
  color: deeppink;
  border-width: 2px;
  margin-left:20px;
  float: right;
}
.retirer{
  position:absolute;
  top: 10px;
  right: 10px;
  color: black;
  height: 20px;
  width: 20px;

}
</style>
