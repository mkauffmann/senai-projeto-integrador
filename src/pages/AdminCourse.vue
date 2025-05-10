<template>
	<main>
		<div class="container">
			<div class="row my-5">
				<div class="col-12">
					<form id="form-cadastro-curso" @submit.prevent="handleCreateCourse">
						<div class="row mb-3 align-items-center">
							<label for="nomeDoCurso" class="col-3 form-label fw-bold">Nome do Curso</label>
							<div class="col-9">
								<input v-model="newCourse.name" type="text" class="form-control" id="nomeDoCurso" required />
							</div>
						</div>
						<div class="row mb-3">
							<label for="descricaoCurso" class="col-3 form-label fw-bold">Descrição</label>
							<div class="col-9">
								<textarea
									v-model="newCourse.description"
									class="form-control"
									id="descricaoCurso"
									rows="3"
									required
								></textarea>
							</div>
						</div>
						<div class="row mb-3 align-items-center">
							<label for="coverImgUrl" class="col-3 form-label fw-bold">URL da Imagem</label>
							<div class="col-9">
								<input v-model="newCourse.coverImgUrl" type="text" class="form-control" id="coverImgUrl" required />
							</div>
						</div>
						<button type="submit" class="btn btn-primary" :disabled="courseStore.loading">
							{{ courseStore.loading ? 'Salvando...' : 'Salvar Curso' }}
						</button>
					</form>
					<div v-if="courseStore.error" class="alert alert-danger mt-3">
						{{ courseStore.error }}
					</div>
					
					<div v-if="courseStore.loading && !courseStore.courses.length" class="mt-4 text-center">
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
					
					<table class="table mt-4" v-if="courseStore.courses.length">
						<thead>
							<tr>
								<th>Nome do Curso</th>
								<th>Descrição</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody id="tabelaCursos">
							<tr v-for="course in courseStore.courses" :key="course.id" :data-curso-id="course.id">
								<td>{{ course.name }}</td>
								<td>{{ course.description }}</td>
								<td>
									<button class="btn btn-sm btn-warning" @click="editCourse(course)">
										<i class="bi bi-pencil"></i>
									</button>
									<button class="btn btn-sm btn-danger" @click="handleDeleteCourse(course.id)">
										<i class="bi bi-trash"></i>
									</button>
									<button
										class="btn btn-sm btn-info btn-toggle-modulos"
										data-bs-toggle="collapse"
										:data-bs-target="'#modulos-curso-' + course.id"
									>
										Módulos <i class="bi bi-chevron-down"></i>
									</button>
								</td>
							</tr>
							<tr v-for="course in courseStore.courses" :key="'modules-' + course.id" class="collapse" :id="'modulos-curso-' + course.id">
								<td colspan="3">
									<div class="modulos-container">
										<!-- Módulos irão aqui quando implementarmos -->
										<div class="alert alert-info">
											Módulos serão implementados em breve.
										</div>
										<button class="btn btn-success btn-add-modulo" :data-curso-id="course.id">
											<i class="bi bi-plus"></i> Adicionar Módulo
										</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					
					<div v-if="!courseStore.loading && !courseStore.courses.length" class="alert alert-info mt-4">
						Nenhum curso encontrado. Crie um novo curso usando o formulário acima.
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCourseStore } from '@/stores/course'
import type { CreateCoursePayload } from '@/services/course.service'

const courseStore = useCourseStore()

const newCourse = ref<CreateCoursePayload>({
  name: '',
  description: '',
  coverImgUrl: '',
  lessons: []
})

const resetForm = () => {
  newCourse.value = {
    name: '',
    description: '',
    coverImgUrl: '',
    lessons: []
  }
}

const handleCreateCourse = async () => {
  try {
    await courseStore.addCourse(newCourse.value)
    resetForm()
  } catch (error) {
    console.error('Failed to create course:', error)
  }
}

const handleDeleteCourse = async (courseId: number) => {
  if (confirm('Tem certeza que deseja excluir este curso?')) {
    try {
      await courseStore.removeCourse(courseId)
    } catch (error) {
      console.error('Failed to delete course:', error)
    }
  }
}

const editCourse = (course: any) => {
  // Implementação futura
  alert('Editar curso: ' + course.name)
}

onMounted(async () => {
  await courseStore.fetchAllCourses()
})
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
