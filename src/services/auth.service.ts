import httpAPI from "@/plugins/httpApi"

type LoginPayload = {
    username: string
    password: string
}

type LoginResponse = {
    access_token: string
    refresh_token: string
    session_state: string
    expires_in: number
    refresh_expires_in: number
}

type RegisterPayload = {
    username: string
    email: string
    password: string
}

type RegisterResponse = null

/**
 * Realiza o registro de um novo usuário
 */
export const registerUser = async (payload: RegisterPayload) => {
  const response = await httpAPI.post<RegisterResponse>('users/', payload)
  return response.data
}

/**
 * Realiza o login do usuário e retorna os tokens de acesso
 */
export const loginUser = async (payload: LoginPayload) => {
  const response = await httpAPI.post<LoginResponse>('users/login', payload)
  return response.data
}