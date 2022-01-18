import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Home: NextPage = () => {  
  return (
    <>
      <Head>
        <title>Project Mate</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.introText}>
          <h2>Welcome To <span>Project Mate</span></h2>
          <h4>Here We Talk About Project Ideas.</h4>
        </div>
        <div className={styles.homeInroPick}>
          <Image src="/images/home_intro.jpg" width={600} height={400}/>
        </div>
      </div>
      
    </>
  )
}

export default Home
