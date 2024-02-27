<script setup>
import FormAjout from "@/components/ApparenceAjout.vue";
import router from "@/router";

const url="https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/11/produits"

    function ajoutElement(n, q, p) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({id: 30, nom: n, qte: q, photo: p}),
  };
  fetch(url, fetchOptions)
    .then((response)=>{
      return response.json();
    })
    .then((dataJSON)=>{
      console.log(dataJSON);
      router.push("/");
    })
    .catch((error)=> console.log(error));
}


</script>

<template>

  <FormAjout @ajoutElement="ajoutElement"/>

</template>

<style scoped>

</style>
