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
      <div class="nav-links" :class="{ closed: !isMobileMenuOpen }">
        <li class="nav-item"><router-link to="/catalogo">Catálogo</router-link></li>
        <li class="nav-item"><router-link to="/sobre">Sobre</router-link></li>
        <li class="nav-item"><router-link to="/contato">Contato</router-link></li>
        <li class="nav-item login login-mobile">
          <router-link v-if="!userStore.isLoggedIn" to="/login">Entrar</router-link>
          <template v-else>
            <span>{{ userStore.user?.username }}</span>
            <span class="delimiter"> | </span>
            <a href="#" @click.prevent="logout">Sair</a>
          </template>
        </li>
      </div>
      <li class="nav-item busca-container">
        <input
          class="busca custom-input"
          type="text"
          name="busca"
          placeholder="Pesquisar"
        />
      </li>
      <template v-if="!userStore.isLoggedIn">
        <router-link to="/login"><li class="nav-item login login-desktop">Entrar</li></router-link>
      </template>
      <template v-else>
        <li class="nav-item login login-desktop">
          {{ userStore.user?.username }} <span class="delimiter">|</span> <a href="#" @click.prevent="logout">Sair</a>
        </li>
      </template>
    </ul>
    <div class="mobile-nav-icon" :class="{ closed: !isMobileMenuOpen, open: isMobileMenuOpen }" @click="toggleMobileMenu">
      <span class="hamburger hamburger-1"></span>
      <span class="hamburger hamburger-2"></span>
      <span class="hamburger hamburger-3"></span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();
const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function logout() {
  userStore.logout();
  // Redirect to home page after logout using router
  if (router.currentRoute.value.path !== '/') {
    router.push('/');
  }
}
</script>

<style scoped>
/* Garantir que não haja conflitos de estilo */
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style> 
