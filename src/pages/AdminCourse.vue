<template>
	<main>
		<div class="container">
			<div class="row my-5">
				<div class="col-12">
					<form id="form-cadastro-curso">
						<div class="row mb-3 align-items-center">
							<label for="nomeDoCurso" class="col-3 form-label fw-bold">Nome do Curso</label>
							<div class="col-9">
								<input type="text" class="form-control" id="nomeDoCurso" required />
							</div>
						</div>
						<div class="row mb-3">
							<label for="descricaoCurso" class="col-3 form-label fw-bold">Descrição</label>
							<div class="col-9">
								<textarea
									class="form-control"
									id="descricaoCurso"
									rows="3"
									required
								></textarea>
							</div>
						</div>
						<button type="submit" class="btn btn-primary">Salvar Curso</button>
					</form>
					<table class="table mt-4">
						<thead>
							<tr>
								<th>Nome do Curso</th>
								<th>Descrição</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody id="tabelaCursos">
							<tr data-curso-id="1">
								<td>Frontend</td>
								<td>Curso completo de desenvolvimento frontend.</td>
								<td>
									<button class="btn btn-sm btn-warning">
										<i class="bi bi-pencil"></i>
									</button>
									<button class="btn btn-sm btn-danger">
										<i class="bi bi-trash"></i>
									</button>
									<button
										class="btn btn-sm btn-info btn-toggle-modulos"
										data-bs-toggle="collapse"
										data-bs-target="#modulos-curso-1"
									>
										Módulos <i class="bi bi-chevron-down"></i>
									</button>
								</td>
							</tr>
							<tr class="collapse" id="modulos-curso-1">
								<td colspan="3">
									<div class="modulos-container">
										<div class="card mb-3" data-modulo-id="1">
											<div class="card-header d-flex justify-content-between">
												<h5>HTML</h5>
												<div>
													<button
														class="btn btn-sm btn-success btn-add-aula"
														data-modulo-id="1"
													>
														<i class="bi bi-plus"></i> Aula
													</button>
													<button class="btn btn-sm btn-primary btn-editar-modulo">
														<i class="bi bi-pencil"></i>
													</button>
													<button class="btn btn-sm btn-danger btn-excluir-modulo">
														<i class="bi bi-trash"></i>
													</button>
												</div>
											</div>
											<div class="card-body">
												<div class="row row-cols-3 g-1">
													<div class="col" data-aula-id="1">
														<div class="card h-100">
															<div class="card-body">
																<h6 class="card-title">Criando Divs</h6>
																<a
																	href="#"
																	class="btn btn-sm btn-outline-primary mb-2"
																>
																	<i class="bi bi-play-fill"></i> Assistir
																</a>
																<p class="card-text">
																	Aprenda a criar divs e estruturar seu HTML.
																</p>
															</div>
															<div class="card-footer">
																<button
																	class="btn btn-sm btn-warning btn-editar-aula"
																>
																	<i class="bi bi-pencil"></i>
																</button>
																<button
																	class="btn btn-sm btn-danger btn-excluir-aula"
																>
																	<i class="bi bi-trash"></i>
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<button class="btn btn-success btn-add-modulo" data-curso-id="1">
											<i class="bi bi-plus"></i> Adicionar Módulo
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
// Sem lógica JavaScript específica necessária para este componente
</script>

<style scoped>
iframe {
  width: 100%;
  height: calc(80vw / 1.7);
}

.container-foto-pessoa {
  border-radius: 50%;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  object-fit: cover;
  position: relative;
}

.container-foto-pessoa img {
  max-width: 300px;
  position: relative;
}

.pessoa-2 {
  left: -50px;
}

.pessoa-3 {
  top: -40px;
  right: 40px;
}

.pessoa-4 {
  top: -100px;
  right: 40px;
}

.descricao-pessoa h4 {
  color: #E89548;
}

.descricao-pessoa h5 {
  color: #98BFE5;
}
</style> 
