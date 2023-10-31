import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useDatatable } from '../hooks/useDatatable'

function ButtonLast() {
  const { pager, setPager } = useDatatable()
  const { pageIndex, pageCount } = pager

  const handleGoToLast = () => {
    if (pageIndex === pageCount) {
      return
    }

    setPager({ pageIndex: pageCount })
  }

  return (
    <button
      className={clsx(
        'border border-zinc-600 dark:border-white rounded-full flex justify-center items-center h-8 w-8',
        {
          'opacity-30': pageIndex === pageCount
        }
      )}
      disabled={pageIndex === pageCount}
      onClick={handleGoToLast}
    >
      <ChevronDoubleRightIcon className='h-6 w-6 text-zinc-600 dark:text-white' />
    </button>
  )
}

export default ButtonLast
