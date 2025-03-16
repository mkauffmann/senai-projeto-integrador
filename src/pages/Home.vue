<template>
  <main>
    <!-- header 1 -->
    <header>
      <div class="container my-5">
        <div class="row">
          <div class="col-12 col-md-7">
            <img
              src="@/assets/images/estudante.jpg"
              class="abrir_modal img_modal-senai img-fluid foto"
              @click="abrirModal"
            />
            <div class="fundo_modal" :class="{ active: modalAberto }" id="modal-senai">
              <div class="modal-senai">
                <img src="@/assets/images/estudante.jpg" />
                <span class="fechar" @click="fecharModal">&times;</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 mt-3 mt-md-1">
            <h2>Aulas abertas, gratuitas e sem pré-requisitos</h2>
            <p>
              Ciclo Básico é uma plataforma de cursos online produzidos por
              instituições públicas brasileiras. Nossa missão é promover a
              educação pública, gratuita e de qualidade.
            </p>
            <a href="./sobre.html" class="link">Saiba mais</a>
          </div>
        </div>
      </div>
    </header>

    <!-- cadastro home begin -->
    <section class="cadastro p-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 text-center">
            <h2 class="text-center">Cadastre-se e participe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsum nobis. Dolore quos eum quidem nulla quibusdam asperiores voluptatum debitis, assumenda earum alias distinctio provident sed, consectetur odit molestiae deserunt!</p>
            <button class="botao" @click="redirecionarParaCadastro">Cadastrar</button>
          </div>
        </div>
      </div>
    </section>
    <!-- cadastro home end -->
    
    <!-- catalogo home start -->
    <section class="cursos mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center my-3">
            <h2>O que você quer descobrir hoje?</h2>
            <h3>Conheça nossos cursos</h3>
          </div>
          <div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
            <img
              src="@/assets/images/biologicas.jpg"
              alt="Borboleta"
              class="foto img-fluid my-3"
            />
            <a href="./catalogo.html" class="botao text-center mb-3">Biológicas</a>
          </div>
          <div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
            <img
              src="@/assets/images/exatas.jpg"
              alt="Calculadora em uma mesa"
              class="foto img-fluid my-3"
            />
            <a href="./catalogo.html" class="botao text-center mb-3">Exatas</a>
          </div>
          <div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
            <img
              src="@/assets/images/humanas.jpg"
              alt="Livro aberto"
              class="foto img-fluid my-3"
            />
            <a href="./catalogo.html" class="botao text-center mb-3">Humanas</a>
          </div>
          <div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
            <img
              src="@/assets/images/interdisciplinares.jpg"
              alt="Pessoa escrevendo em post-its"
              class="foto img-fluid my-3"
            />
            <a href="./catalogo.html" class="botao text-center mb-3">Interdisciplinares</a>
          </div>
        </div>
      </div>
    </section>
    <!-- catalogo home end -->

    <!-- parcerias logos start -->
    <section>
      <div class="container mt-5 parceiros">
        <div class="row justify-content-between">
          <h2 class="mb-3 text-center">Nossos parceiros</h2>
          <div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
            <img src="@/assets/images/logo-senai.jpeg" alt="Logo SENAI" class="img-fluid">
          </div>
          <div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
            <img src="@/assets/images/logo-instituto-federal.png" alt="Logo IF" class="img-fluid">
          </div>
          <div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
            <img src="@/assets/images/logo-ufabc.jpeg" alt="Logo UFABC" class="img-fluid">
          </div>
          <div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
            <img src="@/assets/images/logo-unesp.png" alt="Logo UNESP" class="img-fluid">
          </div>
          <div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
            <img src="@/assets/images/logo-unicamp.jpeg" alt="Logo Unicamp" class="img-fluid">
          </div>
          <div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
            <img src="@/assets/images/logo-usp.png" alt="Logo USP" class="img-fluid">
          </div>
        </div>
        <div class="row text-center mt-3">
          <h5>Sua instituição quer fazer parte?</h5>
          <p><a href="./contato.html">Entre em contato conosco.</a></p>
        </div>
      </div>
    </section>
    <!-- parcerias logos end -->
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalAberto = ref(false);

function abrirModal() {
  modalAberto.value = true;
}

function fecharModal() {
  modalAberto.value = false;
}

function redirecionarParaCadastro() {
  window.location.href = 'login.html#form-cadastro';
}
</script>

<style scoped>
/* Esses estilos serão específicos para o componente Home */
.foto {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.botao {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}

.cadastro {
  background-color: #f8f9fa;
}

.fundo_modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.8);
}

.fundo_modal.active {
  display: block;
}

.modal-senai {
  position: relative;
  margin: 10% auto;
  padding: 20px;
  width: 80%;
  max-width: 700px;
}

.modal-senai img {
  width: 100%;
  border-radius: 10px;
}

.fechar {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}

/* Estilos para os logos dos parceiros */
.logos-parceiros {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

/* Você pode adicionar mais estilos conforme necessário */
</style> 