<template>
	<main>
		<section class="login">
			<div class="container my-5">
				<div class="row">
					<div class="col-12 col-md-6">
						<h2>Entrar</h2>
						<form @submit.prevent="fazerLogin">
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Username</label>
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
					<div class="col-12 text-center"><h5>Dados Pessoais</h5></div>
					<div class="row mb-4">
						<div class="col-12 col-md-6 mb-3">
							<label for="nome" class="form-label"
								>Nome<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="text"
								name="nome"
								id="nome"
								class="form-control custom-input"
								placeholder="Digite seu nome"
								v-model="cadastroData.nome"
								@blur="validarNome"
								required
							/>
							<div class="form-text text-danger" v-if="erros.nome">Nome inválido</div>
						</div>
						<div class="col-12 col-md-6 mb-3">
							<label for="sobrenome" class="form-label"
								>Sobrenome<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="text"
								name="sobrenome"
								id="sobrenome"
								class="form-control custom-input"
								placeholder="Digite seu sobrenome"
								v-model="cadastroData.sobrenome"
								required
							/>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-12 col-md-6 mb-3">
							<label for="username" class="form-label"></label>
							<input
								type="text"
								name="telefone"
								id="telefone"
								class="form-control custom-input"
								placeholder="(xx) xxxx-xxxx"
								v-model="cadastroData.telefone"
								@blur="validarTelefone"
							/>
							<div class="form-text text-danger" v-if="erros.telefone">
								Telefone inválido
							</div>
						</div>
						<div class="col-12 col-md-6 mb-3">
							<label for="celular" class="form-label"
								>Celular<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="text"
								name="celular"
								id="celular"
								class="form-control custom-input"
								placeholder="(xx) xxxxx-xxxx"
								v-model="cadastroData.celular"
								@blur="validarCelular"
								required
							/>
							<div class="form-text text-danger" v-if="erros.celular">Celular inválido</div>
						</div>
					</div>
					<hr />
					<div class="col-12 text-center"><h5>Endereço</h5></div>
					<div class="row mb-4">
						<div class="col-6 col-md-4 mb-3">
							<label for="cep" class="form-label"
								>CEP<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="text"
								name="cep"
								id="cep"
								class="form-control custom-input"
								placeholder="Digite seu CEP"
								v-model="cadastroData.cep"
								@blur="buscarCep"
								required
							/>
							<div class="form-text text-danger" v-if="erros.cep">
								CEP inválido, digite 8 números
							</div>
						</div>
						<div class="col-12 col-md-8 mb-3">
							<label for="logradouro" class="form-label">Logradouro</label>
							<input
								type="text"
								name="logradouro"
								id="logradouro"
								class="form-control custom-input"
								v-model="cadastroData.logradouro"
								:disabled="true"
							/>
						</div>
						<div class="col-3 mb-3">
							<label for="numero" class="form-label"
								>Numero<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="text"
								name="numero"
								id="numero"
								class="form-control custom-input"
								v-model="cadastroData.numero"
								required
							/>
						</div>
						<div class="col-4 mb-3">
							<label for="complemento" class="form-label">Complemento</label>
							<input
								type="text"
								name="complemento"
								id="complemento"
								class="form-control custom-input"
								v-model="cadastroData.complemento"
							/>
						</div>
						<div class="col-12 col-md-5 mb-3">
							<label for="bairro" class="form-label">Bairro</label>
							<input
								type="text"
								name="bairro"
								id="bairro"
								class="form-control custom-input"
								v-model="cadastroData.bairro"
								:disabled="true"
							/>
						</div>
						<div class="col-6 col-md-5 mb-3">
							<label for="cidade" class="form-label">Cidade</label>
							<input
								type="text"
								name="cidade"
								id="cidade"
								class="form-control custom-input"
								v-model="cadastroData.cidade"
								:disabled="true"
							/>
						</div>
						<div class="col-6 col-md-2 mb-3">
							<label for="estado" class="form-label">Estado</label>
							<input
								type="text"
								name="estado"
								id="estado"
								class="form-control custom-input"
								v-model="cadastroData.estado"
								:disabled="true"
							/>
						</div>
					</div>
					<hr />
					<div class="col-12 text-center"><h5>Senha</h5></div>
					<div class="row mb-4">
						<div class="col-12 col-md-6 mb-3">
							<label for="senha" class="form-label"
								>Crie uma senha<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="password"
								name="senha"
								id="senha"
								class="form-control custom-input"
								placeholder="Digite sua senha"
								v-model="cadastroData.senha"
								required
							/>
						</div>
						<div class="col-12 col-md-6 mb-3">
							<label for="senha-confirmar" class="form-label"
								>Confirme sua senha<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="password"
								name="senha-confirmar"
								id="senha-confirmar"
								class="form-control custom-input"
								placeholder="Confirme sua senha"
								v-model="cadastroData.senhaConfirmar"
								@blur="validarSenha"
								required
							/>
							<div class="form-text text-danger" v-if="erros.senha">
								As senhas não conferem
							</div>
						</div>
					</div>
					<div class="row justify-content-end">
						<button
							type="reset"
							class="botao-secundario col-4 col-md-2"
							@click="limparFormulario"
						>
							Limpar
						</button>
						<button
							type="button"
							class="botao-secundario col-4 col-md-2"
							@click="validarFormulario"
						>
							Validar
						</button>
						<button
							type="submit"
							class="botao col-6 col-md-3 ms-2"
							id="btn-submit"
							:disabled="!formValido"
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
import {
	validaNome,
	validaCpf,
	validaTelefone,
	validaCelular,
	validaSenha,
} from "@/utils/formValidator";
import {loginUser, RegisterPayload} from "@/services/auth.service";
import {useUserStore} from "@/stores/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
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
    !erros.username &&
    !erros.email &&
    !erros.password
  );
});

// Funções de validação
function validarUsername() {
  erros.username = cadastroData.username !== '' && !validaUsername(cadastroData.username);
}

function validarPassword() {
  erros.password = cadastroData.password !== '' && !validaPassword(cadastroData.password);
}

// Buscar endereço pelo CEP

function validarFormulario() {
  validarUsername();
  validarPassword();
  
  if (formValido.value) {
    alert('Campos validados!');
  } else {
    alert('Campos preenchidos incorretamente');
  }
}

function limparFormulario() {
  Object.keys(cadastroData).forEach(key => {
    cadastroData[key as keyof typeof cadastroData] = '';
  });
  
  Object.keys(erros).forEach(key => {
    erros[key as keyof typeof erros] = false;
  });
}

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
    alert('Login realizado com sucesso!');
    
    // Navigate to home page or dashboard
    router.push('/');
    
    // Clear the form
    loginData.username = '';
    loginData.senha = '';
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert('Falha no login. Verifique suas credenciais.');
  }
}

function cadastrar() {
  // Simulação de cadastro
  console.log('Dados de cadastro:', cadastroData);
  alert('Cadastro realizado com sucesso!');
  // Limpar o formulário
  limparFormulario();
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
