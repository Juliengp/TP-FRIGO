<script setup>

import {onMounted, reactive, watch} from "vue";
import Element from "@/Element";
import ListElement from "@/components/Recherche.vue";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/11/produits";
const listeElement = reactive([]);

let nomA ='';

function affichElement() {
  fetch(url+ `?search=`+ nomA)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeElement.splice(0,listeElement.length)
      for(let element of dataJSON){
        listeElement.push(new Element(element.id, element.nom, element.qte, element.photo))
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
onMounted( () => {
  affichElement();
})

function modification(n){
  nomA=n
  affichElement()
}

 function ajoutQuantité(element){
  element.setqte(1);
   modifierQuantité(element);
}

 function retirerQuantité(element){
  if (element.qte > 0) {
    element.setqte(-1);
     modifierQuantité(element);
  }else {
    console.log("Quantité déjà à zéro");
    alert("Quantité déjà nulle")
  }
}

 function modifierQuantité(element) {
  const fetchOptions = {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({id: element.id, nom: element.nom, qte: element.qte, photo: element.photo})
  };
    fetch(url, fetchOptions)
  .then((response)=>{
      return response.json();
    })
      .then((dataJSON)=>{
        console.log(dataJSON);
        affichElement();
      })
      .catch((error)=> console.log(error));

}


function suppElement(idElement) {
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(url+"/"+idElement, fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      affichElement();
    })
    .catch((error)=> console.log(error));
}


</script>

<template>
  <div>
    <ListElement @modif="modification"/>
  </div>

  <v-row dense>
    <v-col
      v-for="element in listeElement"
      :key="element.id"
      cols="12"
      sm="6"
      md="3"
      lg="2"
      xl="2">
      <v-card color="pink">
        <v-img
          :src="element.photo"
        ></v-img>
        <v-card-title>
          {{ element.nom }} : {{ element.qte }}
        </v-card-title>
        <v-btn class="soustrait" @click="retirerQuantité(element)">
          -
        </v-btn>
        <v-btn class="ajout" @click="ajoutQuantité(element)">
          +
        </v-btn>
        <v-btn class="retirer" @click="suppElement(element.id)"> Supp </v-btn>
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
