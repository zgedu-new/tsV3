export class Cache {
  static getCache(key: string) {
    return localStorage.getItem(key)
  }
  static setCache(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
  static remove(key: string): void {
    localStorage.removeItem(key)
  }
  static clearAll() {
    localStorage.clear()
  }
}
