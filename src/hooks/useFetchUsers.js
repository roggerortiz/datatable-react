import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error('Network response was not OK')
  }

  return response.json()
}

export const useFetchUsers = () => {
  const options = { queryKey: ['users'], queryFn: fetchUsers }
  const { data: users, isLoading, error } = useQuery(options)
  return { users, isLoading, error }
}
