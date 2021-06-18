import '../styles/styles.scss'
// import the context provider
import { HBOProvider } from '../components/HBOProvider';

function MyApp({ Component, pageProps }) {
  // wrap component in provider
  return (
    <HBOProvider>
      <Component {...pageProps} />
    </HBOProvider>
  )
}

export default MyApp
