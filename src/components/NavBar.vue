<template>
  <nav>
    <a href="index.html">
      <img
        class="nav-logo"
        src="@/assets/images/logo_CB-03.png"
        alt="Ciclo Básico"
      />
    </a>

    <ul class="nav-items">
      <div class="nav-links" :class="{ open: menuAberto }">
        <li class="nav-item"><a href="./catalogo.html">Catálogo</a></li>
        <li class="nav-item"><a href="./sobre.html">Sobre</a></li>
        <li class="nav-item"><a href="./contato.html">Contato</a></li>
        <li class="nav-item login login-mobile">
          <a href="./login.html">Entrar</a>
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
      <a href="./login.html">
        <li class="nav-item login login-desktop">Entrar</li>
      </a>
    </ul>
    <div class="mobile-nav-icon" :class="{ open: menuAberto }" @click="toggleMenu">
      <span class="hamburger hamburger-1"> </span>
      <span class="hamburger hamburger-2"> </span>
      <span class="hamburger hamburger-3"> </span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuAberto = ref(false);

function toggleMenu() {
  menuAberto.value = !menuAberto.value;
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-logo {
  height: 40px;
}

.nav-items {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links {
  display: flex;
}

.nav-item {
  margin: 0 15px;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.busca {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.mobile-nav-icon {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 3px 0;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    flex-direction: column;
    width: 100%;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
    z-index: 10;
    transform: translateY(-150%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .mobile-nav-icon {
    display: flex;
  }

  .mobile-nav-icon.open .hamburger-1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .mobile-nav-icon.open .hamburger-2 {
    opacity: 0;
  }

  .mobile-nav-icon.open .hamburger-3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .login-desktop {
    display: none;
  }

  .login-mobile {
    display: block;
  }
}

@media (min-width: 769px) {
  .login-mobile {
    display: none;
  }
}
</style> 