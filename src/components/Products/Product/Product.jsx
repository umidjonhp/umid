import React from 'react'
import styles from "./Product.module.css"
import img from "../../../assets/heroImg.png"
import { BasketIcon } from '../../Icon/BasketIcon/BasketIcon';
function Product() {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt="gadjet" />
      </div>
      <h2>iphone 9</h2>
      <div className={styles.bottom}>
        <h3><span>$</span>899</h3>
        <BasketIcon />
      </div>
    </div>
  )
}

export default Product;