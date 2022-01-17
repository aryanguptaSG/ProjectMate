import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Project Mate</title>
      </Head>
      <div className="body">
        <Navbar/>
      </div>
      
    </>
  )
}

export default Home
