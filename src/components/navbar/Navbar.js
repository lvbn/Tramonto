import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { Link, useHistory } from 'react-router-dom'
import { useShoppingCart } from '../../context/ShoppingCartContext'

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  const [value, setValue] = useState('')
  const [placeHolder, setPlaceHolder] = useState('')

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    if (value) {
      history.push('/products/' + value)
      setPlaceHolder('')
      setValue('')
    }
    else {
      setPlaceHolder('Please type something')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to='/'>
          <div className={styles.logo}></div>
          <h1 className={styles.tramonto}>
            TRAMONTO
          </h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className={styles.searchbarForm}>
        <input
          className={styles.searchbar}
          value={value}
          placeholder={placeHolder}
          onChange={(e) => setValue(e.target.value)}>
        </input>
        <button className={styles.searchBttn}>
        {/* → */}
          <span className={`material-symbols-outlined`}>
            arrow_right_alt
          </span>
        </button>
      </form>

      <div className={styles.right}>
        <div className={styles.cart} onClick={openCart}>{cartQuantity}</div>
        {/* <div className={styles.thumbnail}></div> */}
      </div>
    </div>
  )
}