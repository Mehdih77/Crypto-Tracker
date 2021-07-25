import styles from './Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'

function Navbar() {

  const [isMobile, setIsMobile] = useState(false)

    return (
      <>
       <header className={styles.navbar}>

          <nav className={ isMobile ? `${styles.sidebar_toggle}` : `${styles.sidebar}`}>
              <div>
              <Link href='/'><a><i className="fas fa-home"></i></a></Link>
              <Link href='/graph'><a><i className="fas fa-chart-bar"></i></a></Link>
              <Link href='/cards'><a><span className={styles.nav_badge}>2</span><i className="fas fa-address-card"></i></a></Link>
              <Link href='/charts'><a className='position-relative'><i className="fas fa-chart-pie"></i></a></Link>
              <Link href='/setting'><a><i className="fas fa-cog"></i></a></Link>
              </div>
              <Link href='/dashboard'><a><img className={styles.user_img} src="/img/user.png" alt="user" /></a></Link>
          </nav>
          <button onClick={() => setIsMobile(!isMobile)}><i class={isMobile ? "fas fa-times" : 'fas fa-bars'}></i></button>

      </header>
      </>
    )
}

export default Navbar