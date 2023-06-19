import React, { useState } from 'react'
import styles from './Product.module.css'
import List from '../../components/list/List'
import { useLocation, useParams, Link } from "react-router-dom"

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
  const [mainImg, setMainImg] = useState(item.imgUrl[0])
  const [newItem, setNewItem] = useState({
    cartItemId: Math.floor(Math.random() * 10000),
    id: item.id,
    title: item.title,
    price: item.price,
    gift_wrap: false,
    size: null,
    selectedColor: null,
    quantity: null,
    src_img: item.src_img,
    imgUrl: item.imgUrl
  })

  const handleSizeSelection = (e, index) => {

    setSizeState({
      ...sizeState, activeSize: sizeState?.sizes[index]
    })

    const size = e.currentTarget.textContent
    const productWithSize = {
      ...item, size: size
    }

    setNewItem({ ...newItem, ...productWithSize })
  }

  const activeClass = (index) => {
    if (sizeState.activeSize === sizeState.sizes[index]) {
      return `${styles.selected}`
    } else {
      return ''
    }
  }

  const activeColorClass = (color) => {
    if (color === newItem.selectedColor) {
      return `${styles.selectedColor}`
    } else {
      return `${styles.unselectedColor}`
    }
  }

  const handleGiftWrap = () => {
    if (newItem.gift_wrap === false) newItem.gift_wrap = true;
    else newItem.gift_wrap = false;
  }

  return (
    <>
      <div className={styles.container}>
        <img src={require('../../images/' + mainImg)} alt='' className={styles.mainImage} />

        <div className={styles.productInfo}>
          <div className={styles.title}>
            <div className={styles.tags}>
              {item.category_ids.map((category, index) => (
                <Link key={index} to={'/products/' + category}>
                  <h5>{category}</h5>
                </Link>
              ))}
            </div>
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

          {
            item.colors ?
              <div className={styles.colors}>
                {
                  item.colors.map((color, index) => (
                    <div key={color} className={`${activeColorClass(color)}`}>
                      <div className={styles.blackBox}>
                        <div
                          className={`${styles.color}`}
                          style={{ backgroundColor: color }}
                          onClick={(e) => {
                            setNewItem({ ...newItem, selectedColor: color });
                          }}
                        >
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              : null
          }


          <button
            className={styles.add}
            onClick={() => {
              increaseCartQuantity(newItem);
              openCart()
              console.log(newItem)
            }}
          >
            ADD TO CART
          </button>

          <div className={styles.images}>
            {item.imgUrl.map((img, index) => (
              <img
                key={index}
                onClick={() => setMainImg(item.imgUrl[index])}
                src={require('../../images/' + img)}
                alt=''
                className={styles.sideImage}
              />
            ))}
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
