<template>
	<main>
		<section class="login">
			<div class="container my-5">
				<div class="row">
					<div class="col-12 col-md-6">
						<h2>Entrar</h2>
						<form @submit.prevent="fazerLogin">
							<div class="mb-3">
								<label for="exampleInputEmail1" class="form-label">Email</label>
								<input
									type="email"
									class="form-control custom-input"
									id="exampleInputEmail1"
									v-model="loginData.email"
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
							<label for="cpf" class="form-label"
								>CPF<span class="campo-obrigatorio">*</span></label
							>
							<input
								type="text"
								name="cpf"
								id="cpf"
								class="form-control custom-input"
								placeholder="Digite seu CPF"
								v-model="cadastroData.cpf"
								@blur="validarCpf"
								required
							/>
							<div class="form-text text-danger" v-if="erros.cpf">CPF inválido</div>
						</div>
					</div>
					<div class="row mb-4">
						<div class="col-12 col-md-6 mb-3">
							<label for="telefone" class="form-label">Telefone</label>
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
import {useRoute} from "vue-router";
import {
	validaNome,
	validaCpf,
	validaTelefone,
	validaCelular,
	validaSenha,
	buscaCep,
} from "@/utils/formValidator";

const route = useRoute();
const cadastroSection = ref<HTMLElement | null>(null);

// Dados para o formulário de login
const loginData = reactive({
	email: "",
	senha: "",
});

// Dados para o formulário de cadastro
const cadastroData = reactive({
	nome: "",
	cpf: "",
	telefone: "",
	celular: "",
	cep: "",
	logradouro: "",
	numero: "",
	complemento: "",
	bairro: "",
	cidade: "",
	estado: "",
	senha: "",
	senhaConfirmar: "",
});

// Controle de erros de validação
const erros = reactive({
	nome: false,
	cpf: false,
	telefone: false,
	celular: false,
	cep: false,
	senha: false,
});

// Verificar se o formulário está válido
const formValido = computed(() => {
	// Campos obrigatórios preenchidos e sem erros
	return (
		cadastroData.nome !== "" &&
		cadastroData.cpf !== "" &&
		cadastroData.celular !== "" &&
		cadastroData.cep !== "" &&
		cadastroData.logradouro !== "" &&
		cadastroData.numero !== "" &&
		cadastroData.senha !== "" &&
		cadastroData.senhaConfirmar !== "" &&
		!erros.nome &&
		!erros.cpf &&
		!erros.telefone &&
		!erros.celular &&
		!erros.cep &&
		!erros.senha
	);
});

// Funções de validação
function validarNome() {
	erros.nome = cadastroData.nome !== "" && !validaNome(cadastroData.nome);
}

function validarCpf() {
	erros.cpf = cadastroData.cpf !== "" && !validaCpf(cadastroData.cpf);
}

function validarTelefone() {
	erros.telefone = cadastroData.telefone !== "" && !validaTelefone(cadastroData.telefone);
}

function validarCelular() {
	erros.celular = cadastroData.celular !== "" && !validaCelular(cadastroData.celular);
}

function validarSenha() {
	erros.senha =
		cadastroData.senha !== "" && !validaSenha(cadastroData.senha, cadastroData.senhaConfirmar);
}

// Buscar endereço pelo CEP
async function buscarCep() {
	if (cadastroData.cep.length !== 8) {
		erros.cep = true;
		limparEndereco();
		return;
	}

	try {
		const endereco = await buscaCep(cadastroData.cep);
		cadastroData.logradouro = endereco.logradouro;
		cadastroData.bairro = endereco.bairro;
		cadastroData.cidade = endereco.localidade;
		cadastroData.estado = endereco.uf;
		erros.cep = false;
	} catch (error) {
		erros.cep = true;
		limparEndereco();
		alert("CEP não encontrado");
	}
}

function limparEndereco() {
	cadastroData.logradouro = "";
	cadastroData.bairro = "";
	cadastroData.cidade = "";
	cadastroData.estado = "";
}

function validarFormulario() {
	validarNome();
	validarCpf();
	validarTelefone();
	validarCelular();
	validarSenha();

	if (formValido.value) {
		alert("Campos validados!");
	} else {
		alert("Campos preenchidos incorretamente");
	}
}

function limparFormulario() {
	Object.keys(cadastroData).forEach((key) => {
		cadastroData[key as keyof typeof cadastroData] = "";
	});

	Object.keys(erros).forEach((key) => {
		erros[key as keyof typeof erros] = false;
	});
}

function fazerLogin() {
	// Simulação de login
	console.log("Dados de login:", loginData);
	alert("Login realizado com sucesso!");
	// Limpar o formulário
	loginData.email = "";
	loginData.senha = "";
}

function cadastrar() {
	// Simulação de cadastro
	console.log("Dados de cadastro:", cadastroData);
	alert("Cadastro realizado com sucesso!");
	// Limpar o formulário
	limparFormulario();
}

// Se houver um parâmetro "cadastro=true" na URL, rolar até a seção de cadastro
onMounted(() => {
	if (route.query.cadastro === "true" && cadastroSection.value) {
		cadastroSection.value.scrollIntoView({behavior: "smooth", block: "start"});
	}
});
</script>

<style scoped>
.campo-obrigatorio {
	color: red;
	margin-left: 2px;
}
</style>
