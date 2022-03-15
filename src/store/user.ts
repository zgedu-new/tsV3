import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { UserInfo } from '@/services/types'

interface userState {
  token?: string
  userInfo?: UserInfo
}
export const useCounterStoreForSetup = defineStore('userStore', () => {
  const user = reactive<userState>({ token: undefined, userInfo: undefined })
  const setToken = () => {
    return ''
  }
  const getToken = () => {
    return ''
  }

  return {
    user,
    getToken,
    setToken
  }
})
