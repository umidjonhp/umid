import React from 'react'
import styles from "./Products.module.css"
import Product from './Product/Product'

function Products() {
  return (
    <div className={styles.products}>
      <h1>PRODUCTS</h1>
      <Product />
    </div>
  )
}

export default Products