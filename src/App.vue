<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<style>
/* Estilos globais já são importados no main.ts */
.app-container {
  max-width: 100%;
}
</style>
