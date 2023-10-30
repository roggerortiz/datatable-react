import Datatable from './components/Datatable'
import { useFetchUsers } from './hooks/useFetchUsers'

function Users() {
  const { users } = useFetchUsers()

  return (
    <Datatable
      title='Users'
      rows={users ?? []}
      cols={[
        { field: 'name', label: 'Name' },
        { field: 'username', label: 'Username' },
        { field: 'phone', label: 'Phone' },
        { field: 'email', label: 'Email' },
        { field: 'website', label: 'Website' }
      ]}
    />
  )
}

export default Users
