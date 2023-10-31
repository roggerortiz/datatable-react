import { rowsLabel } from '../helpers/utils'
import { useDatatable } from '../hooks/useDatatable'

function PaginationInfo() {
  const { pagination, pager } = useDatatable()
  const { minRowIndex, maxRowIndex } = pagination
  const { totalRows } = pager

  return (
    <div className='w-auto'>
      Showing <span className='font-semibold'>{minRowIndex}</span> to{' '}
      <span className='font-semibold'>{maxRowIndex}</span> of{' '}
      <span className='font-semibold'>{totalRows}</span> {rowsLabel}
    </div>
  )
}

export default PaginationInfo
