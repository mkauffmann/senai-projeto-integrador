import httpAPI from "@/plugins/httpApi"

export type Lesson = {
    id: number;
    name: string;
    description: string;
    videoUrl: string;
}

export type CreateLessonPayload = Omit<Lesson, 'id'>

export type CreateLessonResponse = Lesson


export const createLesson = async (payload: CreateLessonPayload) => {
  const response = await httpAPI.post<CreateLessonResponse>('lessons', payload)
  return response.data
}

export const updateLesson = async (id: number, payload: CreateLessonPayload) => {
  const response = await httpAPI.put<Lesson>(`lessons/${id}`, payload)
  return response.data
}

export const deleteLesson = async (id: number) => {
  const response = await httpAPI.delete(`lessons/${id}`)
  return response.data
}

export const getAllLessons = async () => {
  const response = await httpAPI.get<Lesson[]>('lessons')
  return response.data
}

export const getLessonById = async (id: number) => {
  const response = await httpAPI.get<Lesson>(`lessons/${id}`)
  return response.data
}

