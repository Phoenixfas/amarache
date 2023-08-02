import '../styles/globals.css'
import { store, persistor } from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  )
}
