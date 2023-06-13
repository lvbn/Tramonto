import React from 'react'

import styles from './CartItem.module.css'
import storeItems from '../../data/items.json'
import { useShoppingCart } from '../../context/ShoppingCartContext'


export default function CartItem({ cartItemId }) {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems } = useShoppingCart()
  // const item = storeItems.find(i => i.id === id)
  // if (item === null) return null

  const item = cartItems.find(i => i.cartItemId === cartItemId)
  if (item === null) return null

  // console.log(item)
  return (
    <div className={styles.item}>
      <img src={require('../../images/' + item.src_img)} alt='' className={styles.img} />

      <div className={styles.itemDetails}>
        <div className={styles.titleAndSize}>
          <p>{item.title}</p>
          <p>size: {item.size}</p>
          {/* {item.gift_wrap ?
          <p>gift-wrap: ✓</p> : null
          } */}
        </div>
        <p>{item.price}</p>
        <div className={styles.quantity}>
          <p className={styles.decrease} onClick={() => decreaseCartQuantity(item)}>-</p>
          <p>{item.quantity}</p>
          <p className={styles.increase} onClick={() => increaseCartQuantity(item)}>+</p>
        </div>
        <p className={styles.subtotal} >{item.price * item.quantity}</p>


      </div>
      <p className={styles.removeItem} onClick={() => removeFromCart(item.cartItemId)}>+</p>
    </div>
  )
}
