import React from 'react'
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import CartItem from '../cartItem/CartItem'

export default function ShoppingCart() {
  const { closeCart, cartItems } = useShoppingCart()
  const submit = () => {
    console.log(cartItems)
  }


  const { cartQuantity } = useShoppingCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(process.env)

    const baseUrl = process.env.REACT_APP_SUBMIT_ORDER

    const postOrder = async (order) => {
      const response = await fetch(baseUrl + '/orders', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json"
        },
        credentials: 'include'
      })
      return await response.json()
    }
    postOrder({
      id: `${Math.floor(Math.random() * 1000)}`,
      ourClient: 'Tramonto',
      quantity: `${cartQuantity}`,
      payment: 'paid',
      charge: `${cartQuantity * 17.90}`,
      finalClient: 'John Doe',
      date: `${new Date()}`,
      fullfilment: 'Ready to start'
    })
    closeCart()
  }

  return (
    <div className={styles.container}>

      <div className={styles.cartAndClose}>
        <h1>Cart</h1>
        <h1 className={styles.close} onClick={closeCart}>X</h1>
      </div>

      <ul className={styles.list}>
        {
          cartItems.map(item => (
            <li key={item.cartItemId} className={styles.item}>
              <CartItem {...item}/>
            </li>
          ))
        }
      </ul>

      <div className={styles.cartTotalPrice}>
        Total{' '}
        {cartItems.reduce((total, cartItem) => {
          return total + (cartItem.price * cartItem.quantity)
        }, 0)}
      </div>

      <div className={styles.checkout} onClick={(e) => {submit(); handleSubmit(e)}}>
        <div className={styles.checkoutMargin} >
          <h1>Checkout</h1>
        </div>
      </div>
    </div>
  )
}
