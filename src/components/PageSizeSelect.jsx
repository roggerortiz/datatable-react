import { pageSizes, rowsLabel } from '../helpers/utils'
import { useDatatable } from '../hooks/useDatatable'

function PageSizeSelect() {
  const { pager, setPager } = useDatatable()
  const { pageSize } = pager

  const handleChange = (e) => {
    const newPageSize = Number(e.target.value) || 10
    setPager({ pageSize: newPageSize, pageIndex: 0 })
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

      <span>{rowsLabel}</span>
    </div>
  )
}

export default PageSizeSelect
