import { ChevronRightIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useDatatable } from '../hooks/useDatatable'

function ButtonNext() {
  const { pager, setPager } = useDatatable()
  const { pageIndex, pageCount } = pager

  const handleGoToNext = () => {
    if (pageIndex === pageCount) {
      return
    }

    setPager({ pageIndex: pageIndex + 1 })
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
      onClick={handleGoToNext}
    >
      <ChevronRightIcon className='h-6 w-6 text-zinc-600 dark:text-white' />
    </button>
  )
}

export default ButtonNext
