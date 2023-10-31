import { useDatatable } from '../hooks/useDatatable'
import ButtonFirst from './ButtonFirst'
import ButtonLast from './ButtonLast'
import ButtonNext from './ButtonNext'
import ButtonPage from './ButtonPage'
import ButtonPrev from './ButtonPrev'
import ButtonShowLess from './ButtonShowLess'
import ButtonShowMore from './ButtonShowMore'

function Pagination() {
  const { pager, pagination } = useDatatable()
  const { totalRows } = pager
  const { pages } = pagination

  if (!totalRows) {
    return <></>
  }

  return (
    <div className='flex flex-1 justify-end gap-2'>
      <ButtonFirst />
      <ButtonPrev />
      <ButtonShowLess />

      {pages.map((page) => (
        <ButtonPage
          key={page}
          page={page}
        />
      ))}

      <ButtonShowMore />
      <ButtonNext />
      <ButtonLast />
    </div>
  )
}

export default Pagination
