import { defineStore } from 'pinia'
import { ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

type User = {
    username: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User|null>(null)
  const isLoggedIn = ref(false)
  const token = ref('')

  token.value = localStorage.getItem('authToken') || ''
  if (token.value) {
    setToken(token.value)
  }

  function setUser(userData: User) {
    user.value = userData
    isLoggedIn.value = true
  }

  function setToken(newToken: string) {
    token.value = newToken
    isLoggedIn.value = true
    localStorage.setItem('authToken', newToken)
    
    try {
      const decoded: any = jwtDecode(newToken)
      if (decoded && decoded.preferred_username) {
        setUser({
          username: decoded.preferred_username
        })
      }
    } catch (error) {
      console.error('Error decoding token:', error)
    }
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
    token.value = ''
    localStorage.removeItem('authToken')
  }

  return {
    user,
    isLoggedIn,
    token,
    setUser,
    setToken,
    logout
  }
})
