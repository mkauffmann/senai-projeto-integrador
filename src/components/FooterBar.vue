<template>
  <footer class="mt-5">
    <div class="footer-container">
      <div class="footer-info">
        <img
          src="@/assets/images/logo_CB-03.png"
          alt="Ciclo Básico"
          class="footer-logo mb-3"
        />
        <p><i class="bi bi-geo-alt-fill"></i> R. Gandavo, 550 - Vila Mariana, 
          São Paulo - SP</p>
        <p><i class="bi bi-envelope-fill"></i> contato@ciclobasico.com.br</p>
        <p><i class="bi bi-telephone-fill"></i> (11) 5555-5555</p>
        <ul class="redes-sociais redes-sociais-footer">
          <li><a href=""><i class="bi bi-facebook"></i></a></li>
          <li><a href=""><i class="bi bi-instagram"></i></a> </li>
          <li><a href=""><i class="bi bi-twitter"></i></a></li>
          <li><a href=""><i class="bi bi-linkedin"></i></a></li>
        </ul> 
      </div>
      <div class="footer-nav">
        <ul class="footer-nav-items">
          <div class="footer-nav-links">
            <li class="nav-item"><a href="./catalogo.html">Catálogo</a></li>
            <li class="nav-item"><a href="./sobre.html">Sobre</a></li>
            <li class="nav-item"><a href="./contato.html">Contato</a></li>
            <li class="nav-item"><a href="./login.html">Entrar</a></li>
          </div>
          <li class="nav-item busca-footer">
            <input
              class="busca"
              type="text"
              name="busca"
              placeholder="Pesquisar"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copy d-none d-sm-block mt-5">
      <em>
        2021 - Projeto Integrador - Curso Técnico de Informática para Internet
        - SENAI/SP</em>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Sem lógica JavaScript adicional por enquanto
</script>

<style scoped>
footer {
  background-color: #333;
  color: white;
  padding: 2rem 0;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-info, .footer-nav {
  flex: 1;
  min-width: 300px;
  margin-bottom: 20px;
}

.footer-logo {
  height: 50px;
}

.redes-sociais {
  display: flex;
  list-style: none;
  padding: 0;
}

.redes-sociais li {
  margin-right: 15px;
}

.redes-sociais a {
  color: white;
  font-size: 1.2rem;
}

.footer-nav-items {
  list-style: none;
  padding: 0;
}

.footer-nav-links {
  margin-bottom: 20px;
}

.nav-item {
  margin-bottom: 10px;
}

.nav-item a {
  color: white;
  text-decoration: none;
}

.busca-footer .busca {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: none;
}

.footer-copy {
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 20px;
  margin-top: 40px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-info, .footer-nav {
    width: 100%;
  }
}
</style> 