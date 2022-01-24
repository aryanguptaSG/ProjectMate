import type { NextPage } from 'next'
import Head from 'next/head'
import UnAuthHome from './components/unAuthHome'
import MainHome from './components/MainHome'
import { useSelector } from 'react-redux'
import { STATE } from "../redux-store/reducers/authReducers"

const Home: NextPage = () => {  
  const getuser = (state:STATE)=>state
  const user = useSelector(getuser);
  return (
    <>
      <Head>
        <title>Project Mate</title>
      </Head>
      {user.isauth?<MainHome/>:<UnAuthHome/>}
    </>
  )
}

export default Home
