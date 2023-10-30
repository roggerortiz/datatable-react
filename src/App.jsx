import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './Layout'
import Users from './Users'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Users />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
