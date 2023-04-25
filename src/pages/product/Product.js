import React from 'react'
import styles from './Product.module.css'
import List from '../../components/list/List'
import { useLocation } from "react-router-dom"

import storeItems from '../../data/items.json'

import { useShoppingCart } from '../../context/ShoppingCartContext'

export default function Product() {
  const { increaseCartQuantity } = useShoppingCart()

  const location = useLocation()
  // console.log(location.pathname)
  const re = /[0-9]/g;
  const id = location.pathname.match(re)[0]

  const item = storeItems.find(item => item.id == id)


  const newItem = {
    cartItemId: Math.floor(Math.random() * 10000),
    id: item.id,
    title: item.title,
    price: item.price,
    gift_wrap: false,
    size: null,
    color: null,
    quantity: null,
    src_img: item.src_img,
    imgUrl: item.imgUrl
  }

  const handleSizeSelection = (size) => {
    const sizes = document.querySelectorAll('.size')
    sizes.forEach(s => {
      if (s.innerText === size) s.classList.add('selected')
      else s.classList.remove('selected')
    })
    newItem.size = size;
    // console.log(size)
  }

  const handleGiftWrap = () => {
    if (newItem.gift_wrap === false) newItem.gift_wrap = true;
    else newItem.gift_wrap = false;
    // console.log(newItem)
  }

  return (
    <>
      <div className={styles.container}>
        <img src={require('../../images/' + item.src_img)} alt='' className={styles.mainImage} />

        <div className={styles.productInfo}>
          <div className={styles.title}>
            <h5>classics</h5>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>



          <div className={styles.priceAndGift}>
            <p className={styles.price}>{item.price}</p>

            <div className={styles.gift}>
              <input
                type="checkbox"
                className={styles.checkbox}
                onClick={() => handleGiftWrap()}
              />
              <p>gift-wrap</p>
            </div>

          </div>

          {/* <div className={styles.sizes}>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div> */}

          <div className={styles.sizes}>
            <div className='size' onClick={() => handleSizeSelection('S')}>S</div>
            <div className='size' onClick={() => handleSizeSelection('M')}>M</div>
            <div className='size' onClick={() => handleSizeSelection('L')}>L</div>
            <div className='size' onClick={() => handleSizeSelection('XL')}>XL</div>
          </div>

          <button
            className={styles.add}
            // onClick={() => increaseCartQuantity(item.id)}
            onClick={() => increaseCartQuantity(newItem)}
          >
            ADD TO CART
          </button>

          <div className={styles.images}>
            <img src={require('../../images/' + 'caique-nascimento.jpg')} alt='' className={styles.sideImage} />
            <img src={require('../../images/' + 'deji-akinyele.jpg')} alt='' className={styles.sideImage} />
            <img src={require('../../images/' + 'ryan-jacobson.jpg')} alt='' className={styles.sideImage} />
          </div>

        </div>
      </div>

      <div className={styles.seeMore}>
        <h5>see more</h5>
        <h1>Recomended for you</h1>
      </div>

      <List />
    </>
  )
}
