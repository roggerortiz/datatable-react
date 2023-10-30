import PropTypes from 'prop-types'

function Layout({ children }) {
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
