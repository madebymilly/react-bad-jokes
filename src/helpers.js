export function storeToLocalStorage( key, value ) {
  window.localStorage.setItem(key, JSON.stringify(value));
}