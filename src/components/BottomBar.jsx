import DataInfo from './DataInfo'
import Pagination from './Pagination'

function BottomBar() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-2 pt-2'>
      <DataInfo />
      <Pagination />
    </div>
  )
}

export default BottomBar
