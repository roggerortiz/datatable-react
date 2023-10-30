import { useDatatable } from '../hooks/useDatatable'

const pageSizes = [5, 10, 20, 25, 50, 100]

function PageSizeSelect() {
  const { rowLabel, pageSize, setPageSize, setPageIndex } = useDatatable()

  const handleChange = (e) => {
    const newPageSize = Number(e.target.value) || 10
    setPageSize(newPageSize)
    setPageIndex(0)
  }

  return (
    <div className='flex gap-1 items-center'>
      <span>Show</span>

      <select
        className='w-auto bg-transparent border-b focus:outline-none text-sm px-2 py-1'
        value={pageSize}
        onChange={handleChange}
      >
        {pageSizes.map((size) => (
          <option
            key={size}
            value={size}
            className='text-zinc-700'
          >
            {size}
          </option>
        ))}
      </select>

      <span>{rowLabel}</span>
    </div>
  )
}

export default PageSizeSelect
