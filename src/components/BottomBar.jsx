import Pagination from './Pagination'
import PaginationInfo from './PaginationInfo'

function BottomBar() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-2 pt-2'>
      <PaginationInfo />
      <Pagination />
    </div>
  )
}

export default BottomBar
