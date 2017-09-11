
export function fetchStorage(key) {
  return JSON.parse(window.localStorage.getItem(key || '[]'))
}

export function saveStorage(key) {
  return window.localStorage.setItem(key, JSON.stringify(value))
}

