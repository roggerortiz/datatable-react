import { useDatatable } from '../hooks/useDatatable'

function DataInfo() {
  const { totalRows, minRowIndex, maxRowIndex, rowLabel } = useDatatable()

  return (
    <div className='w-auto'>
      Showing <span className='font-semibold'>{minRowIndex}</span> to{' '}
      <span className='font-semibold'>{maxRowIndex}</span> of{' '}
      <span className='font-semibold'>{totalRows}</span> {rowLabel}
    </div>
  )
}

export default DataInfo
