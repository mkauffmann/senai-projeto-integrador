<template>
  <main>
    <!-- cursos recomendados start  -->
    <div class="container my-5">
      <div class="row justify-content-between">
        <h3 class="text-center mt-3">Cursos recomendados</h3>
        <div class="col-6 col-lg-3 my-3" v-for="(curso, index) in cursosRecomendados" :key="'rec-'+index">
          <div class="card foto" style="width: 18rem;">
            <img :src="curso.imagem" class="card-img-top" :alt="curso.titulo">
            <div class="card-body text-center">
              <h5 class="card-title">{{ curso.titulo }}</h5>
              <p class="card-text">{{ curso.descricao }}</p>
              <router-link to="/curso" class="link">Ver curso</router-link>
            </div>
          </div>
        </div>
        <h5 class="text-center my-3"><router-link to="/catalogo/recomendados" class="botao">Ver mais</router-link></h5>
      </div>
    </div>
    <!-- cursos recomendados end  -->

    <!-- cursos novos begin  -->
    <div class="container my-5">
      <div class="row justify-content-between">
        <h3 class="text-center mt-3">Adicionados recentemente</h3>
        <div class="col-6 col-lg-3 my-3" v-for="(curso, index) in cursosNovos" :key="'novo-'+index">
          <div class="card foto" style="width: 18rem;">
            <img :src="curso.imagem" class="card-img-top" :alt="curso.titulo">
            <div class="card-body text-center">
              <h5 class="card-title">{{ curso.titulo }}</h5>
              <p class="card-text">{{ curso.descricao }}</p>
              <router-link to="/curso" class="link">Ver curso</router-link>
            </div>
          </div>
        </div>
        <h5 class="text-center my-3"><router-link to="/catalogo/novos" class="botao">Ver mais</router-link></h5>
      </div>
    </div>
    <!-- cursos novos end  -->
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Dados simulados para os cursos
const cursosRecomendados = ref([
  {
    titulo: 'Contabilidade Básica',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/exatas.jpg'
  },
  {
    titulo: 'História do Cinema Brasileiro',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/filme.jpg'
  },
  {
    titulo: 'Introdução aos Estudos Medievais',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/humanas.jpg'
  },
  {
    titulo: 'Biologia I',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/biologicas.jpg'
  },
  {
    titulo: 'Contabilidade Básica',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/exatas.jpg'
  },
  {
    titulo: 'História do Cinema Brasileiro',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/filme.jpg'
  },
  {
    titulo: 'Introdução aos Estudos Medievais',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/humanas.jpg'
  },
  {
    titulo: 'Biologia I',
    descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imagem: '/src/assets/images/biologicas.jpg'
  }
]);

// Reutilizando os mesmos dados para cursos novos (em um projeto real, estes seriam diferentes)
const cursosNovos = ref([...cursosRecomendados.value]);
</script>

<style scoped>
.card-text {
  font-size: 0.8rem;
  color: #444;
}

.card {
  height: 350px;
}
</style> 