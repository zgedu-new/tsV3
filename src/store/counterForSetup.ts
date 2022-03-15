import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStoreForSetup = defineStore('counterForSetup', () => {
  const count = ref<number>(1)
  function increment() {
    count.value++
  }
  function doubleCount() {
    return count.value * 2
  }
  return {
    increment,
    doubleCount,
    count
  }
})
