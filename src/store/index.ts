import { useCounterStoreForSetup } from './counterForSetup'
const appStore: any = {}
export const registerStore = () => {
  appStore.useCounterStoreForSetup = useCounterStoreForSetup()
}
export default appStore
