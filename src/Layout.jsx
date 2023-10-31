import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { isDocumentDarkTheme, setDocumentTheme } from './helpers/utils'
import { useDatatable } from './hooks/useDatatable'

function Layout({ children }) {
  const { setTheme } = useDatatable()

  useEffect(() => {
    const theme = isDocumentDarkTheme() ? 'dark' : 'light'
    setDocumentTheme(theme)
    setTheme(theme)
  }, [])

  return (
    <main className='flex h-full w-full p-2 justify-center items-center bg-zinc-100 dark:bg-zinc-900'>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
