<template>
	<footer class="mt-5">
		<div class="footer-container">
			<div class="footer-info">
				<img src="@/assets/images/logoBranca.png" alt="Eduteck" class="footer-logo mb-3" />
				<p><i class="bi bi-geo-alt-fill"></i> R. Gandavo, 550 - Vila Mariana, São Paulo - SP</p>
				<p><i class="bi bi-envelope-fill"></i> contato@ciclobasico.com.br</p>
				<p><i class="bi bi-telephone-fill"></i> (11) 5555-5555</p>
				<ul class="redes-sociais redes-sociais-footer">
					<li>
						<a href="#"><i class="bi bi-facebook"></i></a>
					</li>
					<li>
						<a href="#"><i class="bi bi-instagram"></i></a>
					</li>
					<li>
						<a href="#"><i class="bi bi-twitter"></i></a>
					</li>
					<li>
						<a href="#"><i class="bi bi-linkedin"></i></a>
					</li>
				</ul>
			</div>
			<div class="footer-nav">
				<ul class="footer-nav-items">
					<div class="footer-nav-links">
						<li class="nav-item"><router-link to="/catalogo">Catálogo</router-link></li>
						<li class="nav-item"><router-link to="/sobre">Sobre</router-link></li>
						<li class="nav-item"><router-link to="/contato">Contato</router-link></li>
						<li class="nav-item"><router-link to="/login">Entrar</router-link></li>
					</div>
					<li class="nav-item busca-footer">
						<input class="busca" type="text" name="busca" placeholder="Pesquisar" />
					</li>
				</ul>
			</div>
		</div>
		<div class="footer-copy d-none d-sm-block mt-5">
			<em> Eduteck - PUC-Minas</em>
		</div>
	</footer>
</template>

<script setup lang="ts">
// Sem lógica JavaScript adicional por enquanto
</script>

<style scoped>
/* Os estilos agora vêm do arquivo shared.css */
</style>
