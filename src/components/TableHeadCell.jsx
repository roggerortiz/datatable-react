import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useDatatable } from '../hooks/useDatatable'

function TableHeadCell({ col }) {
  const { pager, setPager } = useDatatable()
  const { sortField, sortDir } = pager

  const handleChangeSortDir = (e) => {
    e.preventDefault()

    const newSortDir = !sortDir ? 1 : sortDir === 1 ? -1 : 0
    setPager({ sortField: col.field, sortDir: newSortDir })
  }

  return (
    <div
      className='flex justify-between items-center cursor-pointer'
      onClick={handleChangeSortDir}
    >
      <span>{col.label}</span>

      <div className='flex flex-col gap-0.5'>
        <span
          className={clsx(
            'w-0 h-0 border-b-[8px] border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent',
            { 'border-b-gray-600': col.field !== sortField || sortDir !== 1 },
            { 'border-b-white': col.field === sortField && sortDir === 1 }
          )}
        />
        <span
          className={clsx(
            'w-0 h-0 border-t-[8px] border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent',
            { 'border-t-gray-600': col.field !== sortField || sortDir !== -1 },
            { 'border-t-white': col.field === sortField && sortDir === -1 }
          )}
        ></span>
      </div>
    </div>
  )
}

TableHeadCell.propTypes = {
  col: PropTypes.shape({
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    sort: PropTypes.oneOf([1, -1])
  }).isRequired
}

export default TableHeadCell
