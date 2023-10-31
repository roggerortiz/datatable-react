export const rowsLabel = 'records'

export const pageSizes = [5, 10, 20, 25, 50, 100]

export const compareByField = (field, dir = 1) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1) * dir
}

export const isDocumentDarkTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const setDocumentTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
