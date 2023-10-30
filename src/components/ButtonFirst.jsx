import { ChevronDoubleLeftIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useDatatable } from '../hooks/useDatatable'

function ButtonFirst() {
  const { pageIndex, setPageIndex } = useDatatable()

  const handleGoToFirst = () => {
    if (pageIndex === 1) {
      return
    }

    setPageIndex(1)
  }

  return (
    <button
      className={clsx(
        'border border-zinc-600 dark:border-white rounded-full flex justify-center items-center h-8 w-8',
        {
          'opacity-30': pageIndex === 1
        }
      )}
      disabled={pageIndex === 1}
      onClick={handleGoToFirst}
    >
      <ChevronDoubleLeftIcon className='h-6 w-6 text-zinc-600 dark:text-white' />
    </button>
  )
}

export default ButtonFirst
