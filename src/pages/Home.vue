<template>
	<main>
		<!-- header 1 -->
		<header>
			<div class="container my-5">
				<div class="row">
					<div class="col-12 col-md-7">
						<img
							src="@/assets/images/estudanteGeral.jpg"
							class="abrir_modal img_modal-senai img-fluid foto"
							@click="abrirModal"
						/>
						<div
							class="fundo_modal"
							:style="{display: modalAberto ? 'block' : 'none'}"
							id="modal-senai"
						>
							<div class="modal-senai">
								<img src="@/assets/images/estudante.jpg" />
								<span class="fechar" @click="fecharModal">&times;</span>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-5 mt-3 mt-md-1">
						<h2>Esta preparado para seu inicio na programação</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus
							quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatibus quod.. l,,
						</p>
						<router-link to="/sobre" class="link">Saiba mais</router-link>
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
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsum nobis.
							Dolore quos eum quidem nulla quibusdam asperiores voluptatum debitis, assumenda
							earum alias distinctio provident sed, consectetur odit molestiae deserunt!
						</p>
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
							src="@/assets/images/HTML-Logo.png"
							alt="Borboleta"
							class="foto img-fluid my-3"
						/>
						<router-link to="/catalogo?categoria=biologicas" class="botao text-center mb-3"
							>HTML</router-link
						>
					</div>
					<div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
						<img
							src="@/assets/images/cssLogo.png"
							alt="Calculadora em uma mesa"
							class="foto img-fluid my-3"
						/>
						<router-link to="/catalogo?categoria=exatas" class="botao text-center mb-3"
							>CSS</router-link
						>
					</div>
					<div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
						<img
							src="@/assets/images/javascript.png"
							alt="Livro aberto"
							class="foto img-fluid my-3"
						/>
						<router-link to="/catalogo?categoria=humanas" class="botao text-center mb-3"
							>JavaScript</router-link
						>
					</div>
					<div class="col-6 col-lg-3 d-flex flex-column justify-content-between">
						<img
							src="@/assets/images/logicaProgramacao.png"
							alt="Pessoa escrevendo em post-its"
							class="foto img-fluid my-3"
						/>
						<router-link
							to="/catalogo?categoria=interdisciplinares"
							class="botao text-center mb-3"
							>Lógica de Programação</router-link
						>
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
						<img src="@/assets/images/puc-minas.jpg" alt="Logo SENAI" class="img-fluid" />
					</div>
					<div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
						<img src="@/assets/images/cursoEmVideo.png" alt="Logo IF" class="img-fluid" />
					</div>
					<div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
						<img src="@/assets/images/Alura.jpg" alt="Logo UFABC" class="img-fluid" />
					</div>
					<div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
						<img src="@/assets/images/rocketseat.png" alt="Logo UNESP" class="img-fluid" />
					</div>
					<div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
						<img src="@/assets/images/harvard.png" alt="Logo Unicamp" class="img-fluid" />
					</div>
					<div class="col-6 col-md-4 col-lg-2 logos-parceiros foto d-flex align-items-center">
						<img src="@/assets/images/logo-usp.png" alt="Logo USP" class="img-fluid" />
					</div>
				</div>
				<div class="row text-center mt-3">
					<h5>Sua instituição quer fazer parte?</h5>
					<p><router-link to="/contato">Entre em contato conosco.</router-link></p>
				</div>
			</div>
		</section>
		<!-- parcerias logos end -->
	</main>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const modalAberto = ref(false);

function abrirModal() {
	modalAberto.value = true;
	// Também podemos adicionar funcionalidades adicionais aqui, como bloquear o scroll da página
	document.body.style.overflow = "hidden";
}

function fecharModal() {
	modalAberto.value = false;
	// Restaurar o scroll da página
	document.body.style.overflow = "auto";
}

function redirecionarParaCadastro() {
	router.push("/login?cadastro=true");
}
</script>

<style scoped>
/* Estilos específicos para o modal, se necessário */
</style>
