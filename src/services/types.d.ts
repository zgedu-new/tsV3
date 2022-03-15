export interface Result<T> {
  code: number
  data: T
}
export interface UserInfo {
  id: string | number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
}
