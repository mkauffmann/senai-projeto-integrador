import httpAPI from "@/plugins/httpApi"
import type { Lesson } from "./lesson.service";

export type Course = {
    id: number;
    name: string;
    description: string;
    coverImgUrl: string;
    lessons?: Lesson[];
}

export type CreateCoursePayload = Omit<Course, 'id'>

export type CreateCourseResponse = Course

export type GetAllCoursesResponse = Course[]

/**
 * Creates a new course
 */
export const createCourse = async (payload: CreateCoursePayload) => {
  const response = await httpAPI.post<CreateCourseResponse>('courses', payload)
  return response.data
}

/**
 * Deletes a course by ID
 */
export const deleteCourse = async (id: number) => {
  const response = await httpAPI.delete(`courses/${id}`)
  return response.data
}

/**
 * Adds a lesson to a course
 */
export const addLessonToCourse = async (courseId: number, lessonId: number) => {
  const response = await httpAPI.put<Course>(`courses?courseId=${courseId}&lessonId=${lessonId}`)
  return response.data
}

/**
 * Retrieves all available courses
 */
export const getAllCourses = async () => {
  const response = await httpAPI.get<GetAllCoursesResponse>('courses')
  return response.data
}

/**
 * Removes a lesson from a course
 */
export const deleteLessonFromCourse = async (courseId: number, lessonId: number) => {
  const response = await httpAPI.delete(`courses?courseId=${courseId}&lessonId=${lessonId}`)
  return response.data
}

/**
 * Updates course information
 */
export const updateCourseInfo = async (id: number, payload: CreateCoursePayload) => {
  const response = await httpAPI.put<Course>(`courses/${id}`, payload)
  return response.data
}





