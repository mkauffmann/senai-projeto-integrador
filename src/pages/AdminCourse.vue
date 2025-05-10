<template>
	<main>
		<div class="container">
			<div class="row my-5">
				<div class="col-12">
					<form id="form-cadastro-curso" @submit.prevent="handleCreateCourse">
						<div class="row mb-3 align-items-center">
							<label for="nomeDoCurso" class="col-3 form-label fw-bold">Nome do Curso</label>
							<div class="col-9">
								<input v-model="newCourse.name" type="text" class="form-control" id="nomeDoCurso" required :disabled="isSubmitting" />
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
									:disabled="isSubmitting"
								></textarea>
							</div>
						</div>
						<div class="row mb-3 align-items-center">
							<label for="coverImgUrl" class="col-3 form-label fw-bold">URL da Imagem</label>
							<div class="col-9">
								<input v-model="newCourse.coverImgUrl" type="text" class="form-control" id="coverImgUrl" required :disabled="isSubmitting" />
							</div>
						</div>
						<button type="submit" class="btn btn-primary" :disabled="isSubmitting || courseStore.loading">
							<span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
							{{ isSubmitting ? 'Salvando...' : 'Salvar Curso' }}
						</button>
					</form>

					<div v-if="successMessage" class="alert alert-success mt-3">
						{{ successMessage }}
					</div>

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
								<th>URL da Imagem</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody id="tabelaCursos">
							<tr v-for="course in courseStore.courses" :key="course.id" :data-curso-id="course.id">
								<td>
									<input
										v-if="editingCourseId === course.id"
										v-model="editingCourse.name"
										type="text"
										class="form-control"
										:disabled="isUpdating"
									/>
									<span v-else>{{ course.name }}</span>
								</td>
								<td>
									<textarea
										v-if="editingCourseId === course.id"
										v-model="editingCourse.description"
										class="form-control"
										rows="2"
										:disabled="isUpdating"
									></textarea>
									<span v-else>{{ course.description }}</span>
								</td>
								<td>
									<input
										v-if="editingCourseId === course.id"
										v-model="editingCourse.coverImgUrl"
										type="text"
										class="form-control"
										:disabled="isUpdating"
									/>
									<div v-else class="course-image-container">
										<img
											:src="course.coverImgUrl"
											:alt="course.name"
											class="course-thumbnail"
											@error="handleImageError"
										>
									</div>
								</td>
								<td v-if="editingCourseId === course.id">
									<div>
										<button class="btn btn-sm btn-success" @click="saveEditedCourse" :disabled="isUpdating">
											<span v-if="isUpdating" class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
											<i v-else class="bi bi-check"></i> Salvar
										</button>
										<button class="btn btn-sm btn-secondary ms-1" @click="cancelEditing" :disabled="isUpdating">
											<i class="bi bi-x"></i> Cancelar
										</button>
									</div>
								</td>
								<td v-else>
									<div>
										<button class="btn btn-sm btn-warning" @click="startEditing(course)" :disabled="deletingCourseIds.has(course.id) || editingCourseId !== null">
											<i class="bi bi-pencil"></i>
										</button>
										<button class="btn btn-sm btn-danger" @click="handleDeleteCourse(course.id)" :disabled="deletingCourseIds.has(course.id) || editingCourseId !== null">
											<span v-if="deletingCourseIds.has(course.id)" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
											<i v-else class="bi bi-trash"></i>
										</button>
										<button
											class="btn btn-sm btn-info btn-toggle-modulos"
											data-bs-toggle="collapse"
											:data-bs-target="'#aulas-curso-' + course.id"
											:disabled="deletingCourseIds.has(course.id) || editingCourseId !== null"
										>
											Aulas <i class="bi bi-chevron-down"></i>
										</button>
									</div>
								</td>
							</tr>
							<tr v-for="course in courseStore.courses" :key="'lessons-' + course.id" class="collapse" :id="'aulas-curso-' + course.id">
								<td colspan="4">
									<div class="aulas-container">
										<div v-if="!course.lessons || course.lessons.length === 0" class="alert alert-info">
											Nenhuma aula cadastrada para este curso.
										</div>
										<table v-else class="table table-sm table-bordered">
											<thead>
												<tr>
													<th>Nome da Aula</th>
													<th>Descrição</th>
													<th>URL do Vídeo</th>
													<th>Ações</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="lesson in course.lessons" :key="lesson.id">
													<td>{{ lesson.name }}</td>
													<td>{{ lesson.description }}</td>
													<td>
														<a :href="lesson.videoUrl" target="_blank" class="text-truncate d-inline-block" style="max-width: 250px;">
															{{ lesson.videoUrl }}
														</a>
													</td>
													<td>
														<button class="btn btn-sm btn-danger" @click="handleRemoveLesson(course.id, lesson.id)">
															<i class="bi bi-trash"></i>
														</button>
													</td>
												</tr>
											</tbody>
										</table>

										<!-- Form to add new lesson -->
										<div class="card mt-3">
											<div class="card-header">
												<h5 class="mb-0">Adicionar Nova Aula</h5>
											</div>
											<div class="card-body">
												<form @submit.prevent="handleAddLesson(course.id)">
													<div class="mb-3">
														<label for="lessonName" class="form-label">Nome da Aula</label>
														<input v-model="newLesson.name" type="text" class="form-control" id="lessonName" required :disabled="isAddingLesson">
													</div>
													<div class="mb-3">
														<label for="lessonDescription" class="form-label">Descrição</label>
														<textarea v-model="newLesson.description" class="form-control" id="lessonDescription" rows="2" required :disabled="isAddingLesson"></textarea>
													</div>
													<div class="mb-3">
														<label for="lessonVideoUrl" class="form-label">URL do Vídeo</label>
														<input v-model="newLesson.videoUrl" type="text" class="form-control" id="lessonVideoUrl" required :disabled="isAddingLesson">
													</div>
													<button type="submit" class="btn btn-success" :disabled="isAddingLesson">
														<span v-if="isAddingLesson" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
														{{ isAddingLesson ? 'Adicionando...' : 'Adicionar Aula' }}
													</button>
												</form>
											</div>
										</div>
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
import { ref, onMounted, reactive } from 'vue'
import { useCourseStore } from '@/stores/course'
import type { CreateCoursePayload, Course } from '@/services/course.service'
import type { CreateLessonPayload } from '@/services/lesson.service'

const courseStore = useCourseStore()
const isSubmitting = ref(false)
const isUpdating = ref(false)
const isAddingLesson = ref(false)
const successMessage = ref('')
const deletingCourseIds = reactive(new Set<number>())
const editingCourseId = ref<number | null>(null)
const editingCourse = ref<CreateCoursePayload>({
  name: '',
  description: '',
  coverImgUrl: '',
  lessons: []
})

const newCourse = ref<CreateCoursePayload>({
  name: '',
  description: '',
  coverImgUrl: '',
  lessons: []
})

const newLesson = ref<CreateLessonPayload>({
  name: '',
  description: '',
  videoUrl: ''
})

const resetForm = () => {
  newCourse.value = {
    name: '',
    description: '',
    coverImgUrl: '',
    lessons: []
  }
}

const resetLessonForm = () => {
  newLesson.value = {
    name: '',
    description: '',
    videoUrl: ''
  }
}

const handleCreateCourse = async () => {
  try {
    isSubmitting.value = true
    successMessage.value = ''

    await courseStore.addCourse(newCourse.value)

    successMessage.value = 'Curso criado com sucesso!'
    resetForm()

    // Limpa a mensagem de sucesso após 5 segundos
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (error) {
    console.error('Failed to create course:', error)
  } finally {
    isSubmitting.value = false
  }
}

const handleDeleteCourse = async (courseId: number) => {
  if (confirm('Tem certeza que deseja excluir este curso?')) {
    try {
      deletingCourseIds.add(courseId)
      await courseStore.removeCourse(courseId)
      successMessage.value = 'Curso excluído com sucesso!'

      // Limpa a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        successMessage.value = ''
      }, 2500)
    } catch (error) {
      console.error('Failed to delete course:', error)
    } finally {
      deletingCourseIds.delete(courseId)
    }
  }
}

const startEditing = (course: Course) => {
  editingCourseId.value = course.id
  editingCourse.value = {
    name: course.name,
    description: course.description,
    coverImgUrl: course.coverImgUrl,
    lessons: course.lessons || []
  }
}

const cancelEditing = () => {
  editingCourseId.value = null
}

const saveEditedCourse = async () => {
  if (!editingCourseId.value) return

  try {
    isUpdating.value = true
    await courseStore.updateCourse(editingCourseId.value, editingCourse.value)

    editingCourseId.value = null
    successMessage.value = 'Curso atualizado com sucesso!'

    // Limpa a mensagem de sucesso após 2.5 segundos
    setTimeout(() => {
      successMessage.value = ''
    }, 2500)
  } catch (error) {
    console.error('Failed to update course:', error)
  } finally {
    isUpdating.value = false
  }
}

const editCourse = (course: Course) => {
  startEditing(course)
}

const handleImageError = () => {
  // Handle image loading error
  console.error('Failed to load image')
}

const handleAddLesson = async (courseId: number) => {
  try {
    isAddingLesson.value = true

    // Create the lesson first
    const lesson = await courseStore.addLesson(newLesson.value)

    // Then add it to the course
    await courseStore.addLessonToCourse(courseId, lesson.id)

    successMessage.value = 'Aula adicionada com sucesso!'
    resetLessonForm()

    // Clear success message after 2.5 seconds
    setTimeout(() => {
      successMessage.value = ''
    }, 2500)
  } catch (error) {
    console.error('Failed to add lesson:', error)
  } finally {
    isAddingLesson.value = false
  }
}

const handleRemoveLesson = async (courseId: number, lessonId: number) => {
  if (confirm('Tem certeza que deseja remover esta aula do curso?')) {
    try {
      await courseStore.removeLessonFromCourse(courseId, lessonId)
      successMessage.value = 'Aula removida com sucesso!'

      // Clear success message after 2.5 seconds
      setTimeout(() => {
        successMessage.value = ''
      }, 2500)
    } catch (error) {
      console.error('Failed to remove lesson:', error)
    }
  }
}

onMounted(async () => {
  // Just fetch courses, as they already include lessons
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

.course-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.course-thumbnail {
  max-width: 300px;
  max-height: 200px;
  object-fit: contain;
  border-radius: 4px;
}
</style>
