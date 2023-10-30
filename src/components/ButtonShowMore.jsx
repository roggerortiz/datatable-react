import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { useDatatable } from '../hooks/useDatatable'

function ButtonShowMore() {
  const { maxPageIndex, showMore, setPageIndex } = useDatatable()

  const handleGoToPage = () => {
    setPageIndex(maxPageIndex + 1)
  }

  if (!showMore) {
    return <></>
  }

  return (
    <button
      className='flex justify-center items-center h-8 w-8'
      onClick={handleGoToPage}
    >
      <EllipsisHorizontalIcon className='h-6 w-6 text-zinc-600 dark:text-white' />
    </button>
  )
}

export default ButtonShowMore
