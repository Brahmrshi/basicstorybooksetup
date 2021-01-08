import { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
