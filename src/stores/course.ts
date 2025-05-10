import { defineStore } from 'pinia'
import { createCourse, deleteCourse, getAllCourses, addLessonToCourse, deleteLessonFromCourse, updateCourseInfo } from '@/services/course.service'
import type { Course, CreateCoursePayload } from '@/services/course.service'
import { createLesson } from '@/services/lesson.service'
import type { CreateLessonPayload } from '@/services/lesson.service'

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [] as Course[],
    loading: false,
    error: null as string | null
  }),
  
  actions: {
    async fetchAllCourses() {
      try {
        this.loading = true
        this.error = null
        this.courses = await getAllCourses()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch courses'
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    
    async addCourse(courseData: CreateCoursePayload) {
      try {
        this.loading = true
        this.error = null
        const newCourse = await createCourse(courseData)
        this.courses.push(newCourse)
        return newCourse
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to add course'
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async removeCourse(courseId: number) {
      try {
        this.loading = true
        this.error = null
        await deleteCourse(courseId)
        this.courses = this.courses.filter(course => course.id !== courseId)
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to delete course'
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async addLesson(lessonData: CreateLessonPayload) {
      try {
        this.loading = true
        this.error = null
        const newLesson = await createLesson(lessonData)
        return newLesson
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to add lesson'
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async addLessonToCourse(courseId: number, lessonId: number) {
      try {
        this.loading = true
        this.error = null
        await addLessonToCourse(courseId, lessonId)
        // Refresh the course list to get updated data
        await this.fetchAllCourses()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to add lesson to course'
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async removeLessonFromCourse(courseId: number, lessonId: number) {
      try {
        this.loading = true
        this.error = null
        await deleteLessonFromCourse(courseId, lessonId)
        // Refresh the course list to get updated data
        await this.fetchAllCourses()
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to remove lesson from course'
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async updateCourse(courseId: number, courseData: CreateCoursePayload) {
      try {
        this.loading = true
        this.error = null
        const updatedCourse = await updateCourseInfo(courseId, courseData)
        const index = this.courses.findIndex(course => course.id === courseId)
        if (index !== -1) {
          this.courses[index] = updatedCourse
        }
        return updatedCourse
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to update course'
        console.error(error)
        throw error
      } finally {
        this.loading = false
      }
    },
  }
})