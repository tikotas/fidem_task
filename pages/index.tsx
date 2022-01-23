import type { NextPage } from 'next'
import Head         from 'next/head'
import styles       from '../styles/Home.module.scss'
import { BaseLink } from "../src/components/atoms/Link";


const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={styles.welcome}>
        <span> welcome to users crud app</span>
        <BaseLink href="/showAllUsers">CLICK TO START</BaseLink>
      </div>
    </>
  )
}

export default Home
