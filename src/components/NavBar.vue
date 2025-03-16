<template>
  <nav>
    <router-link to="/">
      <img
        class="nav-logo"
        src="@/assets/images/logo_CB-03.png"
        alt="Ciclo Básico"
      />
    </router-link>

    <ul class="nav-items">
      <div class="nav-links closed">
        <li class="nav-item"><router-link to="/catalogo">Catálogo</router-link></li>
        <li class="nav-item"><router-link to="/sobre">Sobre</router-link></li>
        <li class="nav-item"><router-link to="/contato">Contato</router-link></li>
        <li class="nav-item login login-mobile"><router-link to="/login">Entrar</router-link></li>
      </div>
      <li class="nav-item busca-container">
        <input
          class="busca custom-input"
          type="text"
          name="busca"
          placeholder="Pesquisar"
        />
      </li>
      <router-link to="/login"><li class="nav-item login login-desktop">Entrar</li></router-link>
    </ul>
    <div class="mobile-nav-icon closed" @click="toggleMobileMenu">
      <span class="hamburger hamburger-1"></span>
      <span class="hamburger hamburger-2"></span>
      <span class="hamburger hamburger-3"></span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  const navLinks = document.querySelector('.nav-links');
  const mobileNavIcon = document.querySelector('.mobile-nav-icon');
  
  if (navLinks && mobileNavIcon) {
    if (isMobileMenuOpen.value) {
      navLinks.classList.remove('closed');
      mobileNavIcon.classList.remove('closed');
    } else {
      navLinks.classList.add('closed');
      mobileNavIcon.classList.add('closed');
    }
  }
}
</script>

<style scoped>
/* Não precisamos de estilos aqui, pois estamos usando os estilos dos arquivos CSS originais */
</style> 