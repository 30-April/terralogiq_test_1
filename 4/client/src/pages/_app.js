import { ChakraProvider } from '@chakra-ui/react'
import Styles from "../styles/globals.css"
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp