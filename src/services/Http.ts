import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { Result } from './types'
class Http {
  private instance: AxiosInstance
  private readonly options: AxiosRequestConfig
  constructor(options: AxiosRequestConfig) {
    this.options = options
    this.instance = axios.create(options)
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => err
    )
    this.instance.interceptors.response.use(
      (res) => {
        if (res.data.code === 0) {
          return res.data.data
        }
        return res.data
      },
      (err) => {
        return err
      }
    )
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, AxiosResponse<Result<T>>>(config)
        .then((res) => {
          resolve(res as unknown as Promise<T>)
        })
        .catch()
    })
  }
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}
export default Http
