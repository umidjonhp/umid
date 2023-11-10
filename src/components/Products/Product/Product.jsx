import { useContext } from "react";
import React from 'react'
import styles from "./Product.module.css"
import { BasketIcon } from '../../Icon/BasketIcon/BasketIcon';
import GadjetsContext from "../../../context/gadjets-context";

function Product({ gadget }) {
  const ctx = useContext(GadjetsContext);
  const onAddButtonHandler = () => ctx.onAddGadgets(gadget);

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={gadget.thumbnail} alt={gadget.title} />
      </div>
      <h2>{gadget.title}</h2>
      <div className={styles.bottom}>
        <h3><span>$</span>{gadget.price}</h3>
        <BasketIcon clickHandler={onAddButtonHandler} />
      </div>
    </div>
  )
}

export default Product;