import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useDatatable } from '../hooks/useDatatable'

function SearchInput() {
  const { searchText, setSearchText } = useDatatable()

  const handleChange = (e) => {
    const newSearchText = e.target.value ?? ''
    setSearchText(newSearchText)
  }

  const handleClean = () => {
    setSearchText('')
  }

  return (
    <div className='relative w-full md:w-1/3'>
      <input
        placeholder='Searching ...'
        className={clsx(
          'w-full bg-transparent border-b focus:outline-none text-sm pl-2 py-1',
          { 'pr-8': Boolean(!searchText) },
          { 'pr-12': Boolean(searchText) }
        )}
        value={searchText}
        onChange={handleChange}
      />

      {Boolean(searchText) && (
        <button
          className='absolute right-7 top-1/2 -translate-y-1/2 flex justify-center items-center'
          onClick={handleClean}
        >
          <XMarkIcon className='h-4 w-4' />
        </button>
      )}

      <MagnifyingGlassIcon className='absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4' />
    </div>
  )
}

export default SearchInput
