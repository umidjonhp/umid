import React from 'react'
import styles from "./Header.module.css"
import img from "../../assets/heroImg.png"

function Header() {
  return (
    <div className={styles.imgCard}>
      <img src={img} alt="" />
    </div>
  )
}

export default Header