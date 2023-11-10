import React from 'react'
import styles from "./Product.module.css"
import { BasketIcon } from '../../Icon/BasketIcon/BasketIcon';
function Product({ gadget }) {
  console.log(gadget);
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={gadget.thumbnail} alt={gadget.title} />
      </div>
      <h2>{gadget.title}</h2>
      <div className={styles.bottom}>
        <h3><span>$</span>{gadget.price}</h3>
        <BasketIcon />
      </div>
    </div>
  )
}

export default Product;