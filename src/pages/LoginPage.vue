<template>
	<main>
		<section class="login">
			<div class="container my-5">
				<div class="row">
					<div class="col-12 col-md-6">
						<h2>Entrar</h2>
						<form @submit.prevent="fazerLogin">
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Nome de usuário</label>
								<input
									type="text"
									class="form-control custom-input"
									id="exampleInputEmail1"
									v-model="loginData.username"
									aria-describedby="emailHelp"
								/>
							</div>
							<div class="mb-3">
								<label for="exampleInputPassword1" class="form-label">Senha</label>
								<input
									type="password"
									class="form-control custom-input"
									id="exampleInputPassword1"
									v-model="loginData.senha"
								/>
							</div>
							<button type="submit" class="botao">Entrar</button>
						</form>
					</div>
					<div class="col-md-6 d-none d-md-block">
						<img
							src="@/assets/images/estudanteProgramacao.jpg"
							alt="Estudante segurando livros"
							class="img-fluid foto"
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="cadastro" ref="cadastroSection">
			<div class="container my-5">
				<div class="col-12 text-center mt-5 mb-3">
					<h3>Ainda não tem uma conta?</h3>
					<h4>Faça seu cadastro gratuitamente</h4>
				</div>
				<form id="form-cadastro" @submit.prevent="cadastrar">
					<div class="col-12 text-center"><h5>Dados de Cadastro</h5></div>
					<div class="row mb-4">
						<div class="col-12 col-md-6 mb-3">
							<label for="username" class="form-label">
								Nome de usuário<span class="campo-obrigatorio">*</span>
							</label>
							<input
								type="text"
								name="username"
								id="username"
								class="form-control custom-input"
								placeholder="Digite seu nome de usuário"
								v-model="cadastroData.username"
								@blur="validarUsername"
								required
							/>
							<div class="form-text text-danger" v-if="erros.username">Nome de usuário inválido</div>
						</div>
						<div class="col-12 col-md-6 mb-3">
							<label for="email" class="form-label">
								Email<span class="campo-obrigatorio">*</span>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								class="form-control custom-input"
								placeholder="Digite seu email"
								v-model="cadastroData.email"
								@blur="validarEmail"
								required
							/>
							<div class="form-text text-danger" v-if="erros.email">Email inválido</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-12 col-md-6 mb-3">
							<label for="senha" class="form-label">
								Crie uma senha<span class="campo-obrigatorio">*</span>
							</label>
							<input
								type="password"
								name="senha"
								id="senha"
								class="form-control custom-input"
								placeholder="Digite sua senha"
								v-model="cadastroData.password"
								required
							/>
						</div>
						<div class="col-12 col-md-6 mb-3">
							<label for="senha-confirmar" class="form-label">
								Confirme sua senha<span class="campo-obrigatorio">*</span>
							</label>
							<input
								type="password"
								name="senha-confirmar"
								id="senha-confirmar"
								class="form-control custom-input"
								placeholder="Confirme sua senha"
								v-model="senhaConfirmar"
								@blur="validarSenha"
								required
							/>
							<div class="form-text text-danger" v-if="erros.password">
								As senhas não conferem
							</div>
						</div>
					</div>
					<div class="row justify-content-end">
						<button
							type="submit"
							class="botao col-6 col-md-3"
							id="btn-submit"
						>
							Cadastrar
						</button>
					</div>
				</form>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted, computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import {loginUser, registerUser, RegisterPayload} from "@/services/auth.service";
import {useUserStore} from "@/stores/user";
import {useToast} from "vue-toastification";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const toast = useToast();
const cadastroSection = ref<HTMLElement | null>(null);

// Dados para o formulário de login
const loginData = reactive({
  username: '',
  senha: ''
});

// Dados para o formulário de cadastro
const cadastroData = reactive<RegisterPayload>({
  username: '',
  email: '',
  password: ''
});

// Senha de confirmação
const senhaConfirmar = ref('');

// Controle de erros de validação
const erros = reactive({
  username: false,
  email: false,
  password: false
});

// Verificar se o formulário está válido
const formValido = computed(() => {
  // Campos obrigatórios preenchidos e sem erros
  return (
    cadastroData.username !== '' &&
    cadastroData.email !== '' &&
    cadastroData.password !== '' &&
    senhaConfirmar.value !== '' &&
    !erros.username &&
    !erros.email &&
    !erros.password
  );
});

/**
 * Valida o username informado
 */
function validarUsername() {
  erros.username = cadastroData.username === '';
}

/**
 * Valida o email informado
 */
function validarEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  erros.email = !emailRegex.test(cadastroData.email);
}

/**
 * Verifica se as senhas informadas são iguais
 */
function validarSenha() {
  erros.password = cadastroData.password !== senhaConfirmar.value;
}

/**
 * Realiza o login do usuário
 */
async function fazerLogin() {
  try {
    // Call the login service with credentials
    const response = await loginUser({
      username: loginData.username,
      password: loginData.senha
    });
    
    // Set the token in the store (this will also extract user info)
    userStore.setToken(response.access_token);
    
    // Show success message
    toast.success('Login realizado com sucesso!');
    
    // Navigate to home page or dashboard
    router.push('/');
    
    // Clear the form
    loginData.username = '';
    loginData.senha = '';
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    toast.error('Falha no login. Verifique suas credenciais.');
  }
}

/**
 * Realiza o cadastro do usuário e faz login automático
 */
async function cadastrar() {
  // Validar formulário antes de submeter
  validarUsername();
  validarEmail();
  validarSenha();
  
  if (formValido.value) {
    try {
      // Registrar o novo usuário
      await registerUser(cadastroData);
      
      // Se chegou aqui, o registro foi bem-sucedido (código 2xx)
      // pois axios lança exceção para respostas não 2xx
      try {
        // Login automático com as credenciais cadastradas
        const loginResponse = await loginUser({
          username: cadastroData.username,
          password: cadastroData.password
        });
        
        // Definir o token do usuário
        userStore.setToken(loginResponse.access_token);
        
        // Exibir mensagem de sucesso
        toast.success('Cadastro realizado com sucesso! Você está conectado.');
        
        // Navegar para a página inicial
        router.push('/');
      } catch (loginError) {
        console.error('Erro ao fazer login após cadastro:', loginError);
        toast.warning('Cadastro realizado com sucesso, mas não foi possível fazer login automático. Por favor, faça login manualmente.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      toast.error('Falha no cadastro. Por favor, tente novamente.');
    }
  } else {
    toast.error('Por favor, corrija os erros no formulário antes de continuar.');
  }
}

// Se houver um parâmetro "cadastro=true" na URL, rolar até a seção de cadastro
onMounted(() => {
  if (route.query.cadastro === 'true' && cadastroSection.value) {
    cadastroSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
</script>

<style scoped>
.campo-obrigatorio {
  color: red;
  margin-left: 2px;
}
</style> 
