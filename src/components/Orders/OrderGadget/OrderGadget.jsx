import React from 'react'
import styles from "./OrderGadget.module.css"
import img from "../../../assets/heroImg.png"
import { DeleteIcon } from '../../Icon/DeleteIcon/DeleteIcon'

function OrderGadget() {
  return (
    <div className={styles.gadgetCard}>
        <div className={styles.box}>
            <div className={styles.phoneImg}>
                <img src={img} alt="" />
            </div>
            <div className={styles.counter}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>
        </div>
        <div className={styles.title}>
            <span>OPPO</span>
            <span>OPPOF19</span>
        </div>
        <div className={styles.price}>
            <h3><span>$</span>499</h3>
            <DeleteIcon />
        </div>
    </div>
  )
}

export default OrderGadget