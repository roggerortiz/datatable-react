import PageSizeSelect from './PageSizeSelect'
import SearchInput from './SearchInput'

function TopBar() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <PageSizeSelect />
      <SearchInput />
    </div>
  )
}

export default TopBar
