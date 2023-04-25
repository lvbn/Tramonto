import React from 'react'
import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}></div>
          <h1 className={styles.tramonto}>
            <Link to='/'>TRAMONTO</Link>
          </h1>
      </div>

      <form>
        <input className={styles.searchbar}></input>
      </form>

      <div className={styles.right}>
        <div className={styles.cart} onClick={openCart}>{cartQuantity}</div>
        <div className={styles.thumbnail}></div>
      </div>
    </div>
  )
}
