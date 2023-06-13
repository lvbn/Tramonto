import React, { useState } from 'react'
import styles from './Product.module.css'
import List from '../../components/list/List'
import { useLocation, useParams } from "react-router-dom"

import storeItems from '../../data/items.json'

import { useShoppingCart } from '../../context/ShoppingCartContext'

const sizes = {
  activeSize: { size: 'M' },
  sizes: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
}

export default function Product() {

  const param = useParams()
  let item = storeItems.find(item => String(item.id) === param.id)

  const { increaseCartQuantity } = useShoppingCart()
  const { openCart } = useShoppingCart()

  const [sizeState, setSizeState] = useState(sizes)
  const [newItem, setNewItem] = useState({
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
  })


  // let newItem = {
  //   cartItemId: Math.floor(Math.random() * 10000),
  //   id: item.id,
  //   title: item.title,
  //   price: item.price,
  //   gift_wrap: false,
  //   size: null,
  //   color: null,
  //   quantity: null,
  //   src_img: item.src_img,
  //   imgUrl: item.imgUrl
  // }

  const handleSizeSelection = (e, index) => {

    setSizeState({
      ...sizeState, activeSize: sizeState?.sizes[index]
    })

    const size = e.currentTarget.textContent
    const productWithSize = {
      ...item, size: size
    }

    // newItem.size = sizeState.sizes[index];
    setNewItem({...newItem, ...productWithSize})
  }

  // console.log('ACTIVE SIZE: ', sizeState.activeSize)
  // console.log('NEW ITEM: ', newItem)

  const activeClass = (index) => {
    if (sizeState.activeSize === sizeState.sizes[index]) {
      return `${styles.selected}`
    } else {
      return ''
    }
  }

  const handleGiftWrap = () => {
    if (newItem.gift_wrap === false) newItem.gift_wrap = true;
    else newItem.gift_wrap = false;
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

          <div className={styles.sizes}>
            {
              sizes.sizes.map((size, index) => (
                <div
                  key={size.size}
                  className={`size ${activeClass(index)}`}
                  onClick={(e) => handleSizeSelection(e, index)}
                >
                  {size.size}
                </div>
              ))
            }
          </div>


          <button
            className={styles.add}
            onClick={() => {
              increaseCartQuantity(newItem);
              openCart()
            }}
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
