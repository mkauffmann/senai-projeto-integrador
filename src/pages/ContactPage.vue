<template>
  <main>
    <!-- form contato begin  -->
    <div class="container my-5">
      <form @submit.prevent="enviarFormulario">
        <div class="row">
          <h2 class="text-center mb-3">Fale conosco</h2>
          <div class="col-12 col-md-6 mt-4">
            <div class="mb-3">
              <label for="nome" class="form-label">Nome</label>
              <input 
                type="text" 
                placeholder="Digite seu nome completo" 
                class="form-control custom-input" 
                id="nome" 
                v-model="formData.nome"
                @blur="validarNome"
              >
              <div class="text-danger" v-if="erros.nome">Nome inválido</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                placeholder="Digite seu email" 
                class="form-control custom-input" 
                id="email" 
                aria-describedby="emailHelp" 
                v-model="formData.email"
              >
            </div>
            <div class="mb-3">
              <label for="telefone" class="form-label">Telefone</label>
              <input 
                type="text" 
                placeholder="DDD + Telefone" 
                class="form-control custom-input" 
                id="telefone" 
                v-model="formData.telefone"
                @blur="validarTelefone"
              >
              <div class="text-danger" v-if="erros.telefone">Telefone inválido (Ex: 11 91234-5678)</div>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex flex-column mt-4">
            <div class="mb-3">
              <label for="assunto" class="form-label">Assunto</label>
              <input 
                type="text" 
                placeholder="Digite o assunto" 
                class="form-control custom-input" 
                id="assunto" 
                v-model="formData.assunto"
              >
            </div>
            <div class="mb-3">
              <label for="mensagem" class="form-label">Mensagem</label>
              <textarea 
                class="form-control custom-input" 
                id="mensagem" 
                placeholder="Escreva sua mensagem" 
                rows="3" 
                v-model="formData.mensagem"
              ></textarea>
            </div>
            <div class="col-auto align-self-end">
              <button 
                type="submit" 
                class="botao mb-3" 
                :disabled="!formValido"
              >Enviar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- form contato end  -->

    <!-- mapa begin  -->
    <section>
      <div class="container mapa mx-auto">
        <div class="row justify-content-between">
          <div class="col-12 col-lg-8">
            <iframe class="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.360200711035!2d-46.64730428552145!3d-23.59141146858671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2716ad0ebb%3A0x6aabc21ba9844ecc!2sR.%20Gandavo%2C%20550%20-%20Vila%20Clementino%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004023-001!5e0!3m2!1spt-BR!2sbr!4v1628339595220!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="col-12 col-lg-4 mt-4">
            <h5 class="my-3"><i class="bi bi-geo-alt-fill"></i> R. Gandavo, 550 - Vila Mariana, São Paulo - SP</h5>
            <h5 class="my-3"><i class="bi bi-envelope-fill"></i> contato@ciclobasico.com.br</h5>
            <h5 class="my-3"><i class="bi bi-telephone-fill"></i> (11) 5555-5555</h5>
            
            <ul class="redes-sociais redes-sociais-contato">
              <li><a href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a href="#"><i class="bi bi-instagram"></i></a></li>
              <li><a href="#"><i class="bi bi-twitter"></i></a></li>
              <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
            </ul> 
          </div>
        </div>
      </div>
    </section>
    <!-- mapa end  -->
  </main>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { validaNome, validaTelefone } from '@/utils/formValidator';

const formData = reactive({
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: ''
});

const erros = reactive({
  nome: false,
  telefone: false
});

function validarNome() {
  erros.nome = formData.nome !== '' && !validaNome(formData.nome);
}

function validarTelefone() {
  erros.telefone = formData.telefone !== '' && !validaTelefone(formData.telefone);
}

const formValido = computed(() => {
  // Verificar se todos os campos obrigatórios estão preenchidos e sem erros
  return (
    formData.nome !== '' && 
    formData.email !== '' && 
    formData.assunto !== '' && 
    formData.mensagem !== '' &&
    !erros.nome &&
    !erros.telefone
  );
});

function enviarFormulario() {
  console.log('Formulário enviado:', formData);
  // Aqui você implementaria a lógica para enviar o formulário para o backend
  alert('Formulário enviado com sucesso!');
  // Limpar o formulário após envio
  Object.keys(formData).forEach(key => {
    formData[key as keyof typeof formData] = '';
  });
}
</script>

<style scoped>
/* Garanta que não haja estilos que interfiram com o layout global */
</style> 