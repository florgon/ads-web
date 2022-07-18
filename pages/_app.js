import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from '../components/layout'
import { AuthProvider } from '../contexts/auth'

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default App