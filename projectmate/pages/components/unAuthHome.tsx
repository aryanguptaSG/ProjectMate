import styles from '../../styles/Home.module.css'
import Image from 'next/image'

const UnAuthHome = () => {  
  return (
    <>
      <div className={styles._body}>
        <div className={styles._introText}>
          <h2>Welcome To <span>Project Mate</span></h2>
          <h4>Here We Talk About Project Ideas.</h4>
        </div>
        <div className={styles._homeInroPick}>
          <Image src="/images/home_intro.jpg" width={600} height={400}/>
        </div>
      </div>
      
    </>
  )
}

export default UnAuthHome
