import { rowsLabel } from '../helpers/utils'
import { useDatatable } from '../hooks/useDatatable'
import TableHeadCell from './TableHeadCell'

function Table() {
  const { cols, pagedRows } = useDatatable()

  return (
    <div className='h-full overflow-auto light-scrollbars'>
      <table className='relative table-auto text-sm w-full border-collapse'>
        <thead>
          <tr className='sticky top-0 z-10 bg-white dark:bg-zinc-800'>
            <th className='border-b text-center font-semibold p-2'>Nro.</th>
            {cols.map((col, index) => (
              <th
                key={`${col.field}-${index}`}
                className='border-b font-semibold p-2'
              >
                <TableHeadCell col={col} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pagedRows.map((row, index) => (
            <tr
              key={index}
              className='border-b hover:bg-zinc-200 dark:hover:bg-zinc-600'
            >
              <td className='text-center'>{index + 1}</td>
              {cols.map((col) => (
                <td
                  key={`${col.field}-${index}`}
                  className='p-2'
                >
                  {row[col.field]}
                </td>
              ))}
            </tr>
          ))}

          {Boolean(!pagedRows.length) && (
            <tr className='border-b'>
              <td
                colSpan={cols.length + 1}
                className='text-center italic p-2'
              >
                No {rowsLabel} found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
