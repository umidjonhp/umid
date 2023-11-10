import React from 'react'
import styles from "./Navbar.module.css"
import { LogoIcon } from '../Icon/LogoIcon/LogoIcon'
import { BagIcon } from '../Icon/BagIcon/BagIcon'

function Navbar() {
  return (
    <nav >
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.btn}>
            <LogoIcon />
          </div>
          <div className={styles.btn}>
            <BagIcon />
          </div>
          <span>0</span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar