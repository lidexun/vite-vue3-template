import http from '@/utils/axios'

export function login(params: any) {
  return http.post('/login', params)
}