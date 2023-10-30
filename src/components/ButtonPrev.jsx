import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useDatatable } from '../hooks/useDatatable'

function ButtonPrev() {
  const { pageIndex, setPageIndex } = useDatatable()

  const handleGoToPrev = () => {
    if (pageIndex === 1) {
      return
    }

    setPageIndex(pageIndex - 1)
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
      onClick={handleGoToPrev}
    >
      <ChevronLeftIcon className='h-6 w-6 text-zinc-600 dark:text-white' />
    </button>
  )
}

export default ButtonPrev
