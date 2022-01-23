import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { store }  from "../redux/store";
import styles     from "../styles/Home.module.scss";
import { Navbar } from "../src/components/molecules/Navbar";
import { Provider }      from "react-redux";


function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Provider store={store}>
        <div className={styles.container}>
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}

export default MyApp
