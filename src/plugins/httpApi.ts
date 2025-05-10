import axios, { type AxiosInstance, type AxiosError } from 'axios'

import { useUserStore } from '@/stores/user'

const httpAPI: AxiosInstance = axios.create()
httpAPI.defaults.baseURL = import.meta.env.VITE_APP_API_URL

httpAPI.interceptors.request.use(
  (config: any) => {
    const { token } = useUserStore()
    config.headers.Authorization = token
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

export default httpAPI
