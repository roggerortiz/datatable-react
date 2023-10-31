import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useDatatable } from '../hooks/useDatatable'

function ButtonPage({ page }) {
  const { pager, setPager } = useDatatable()
  const { pageIndex } = pager

  const handleGoToPage = (page) => () => {
    if (pageIndex === page) {
      return
    }

    setPager({ pageIndex: page })
  }

  return (
    <button
      className={clsx(
        'border border-zinc-600 dark:border-white rounded-full flex justify-center items-center text-sm h-8 w-8 font-semibold',
        {
          'bg-zinc-200': pageIndex === page,
          'dark:bg-zinc-600': pageIndex === page
        }
      )}
      disabled={pageIndex === page}
      onClick={handleGoToPage(page)}
    >
      <span>{page}</span>
    </button>
  )
}

ButtonPage.propTypes = {
  page: PropTypes.number.isRequired
}

export default ButtonPage
