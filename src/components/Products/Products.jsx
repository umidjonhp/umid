import React from 'react'
import styles from "./Products.module.css"
import Product from './Product/Product'
import gadgets from "../../data/data"

function Products() {
  return (
    <div className={styles.products}>
      <h1>PRODUCTS</h1>
      <div className={styles.gadgets}>
        {gadgets.map((gadget) => (
          <Product key={gadget.id} gadget={gadget} />
        ))}
      </div>


    </div>
  )
}

export default Products