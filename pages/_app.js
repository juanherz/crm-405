import '../styles/globals.css'
import '../components/table/table.css'
import '../components/navbar/Navbar.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
