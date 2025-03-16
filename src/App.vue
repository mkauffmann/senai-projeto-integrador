<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Home from './pages/Home.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <Home />
    <FooterBar />
  </div>
</template>

<style>
/* Estilos globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.app-container {
  max-width: 100%;
  overflow-x: hidden;
}

/* Você pode importar os estilos específicos do Bootstrap aqui ou no main.ts */
/* Ou criar um arquivo CSS separado para os estilos globais */
</style>
