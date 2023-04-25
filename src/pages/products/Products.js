import React from 'react'

import styles from './Products.module.css'
import { Link } from 'react-router-dom'
import productsArray from '../../data/items.json'

export default function Products() {

  // const productsArray = [
  //   {
  //     id: 1,
  //     category_ids: [1, 2, 3],
  //     title: 't-shirt',
  //     description: 'soft and comfy touch. Cotton special.',
  //     price: 75.00,
  //     currency: 'dollars',
  //     colors: [1, 2, 3, 4, 5],
  //     sizes: ['S', 'M', 'L', 'XL'],
  //     src_img: 'alexander-krivitskiy.jpg'
  //   },
  //   {
  //     id: 2,
  //     category_ids: [1, 2, 3],
  //     title: 't-shirt',
  //     description: 'soft and comfy touch. Cotton special.',
  //     price: 105.00,
  //     currency: 'dollars',
  //     colors: [1, 2, 3, 4, 5],
  //     sizes: ['S', 'M', 'L', 'XL'],
  //     src_img: 'caique-nascimento.jpg'
  //   },
  //   {
  //     id: 3,
  //     category_ids: [1, 2, 3],
  //     title: 't-shirt',
  //     description: 'soft and comfy touch. Cotton special.',
  //     price: 75.00,
  //     currency: 'dollars',
  //     colors: [1, 2, 3, 4, 5],
  //     sizes: ['S', 'M', 'L', 'XL'],
  //     src_img: 'christopher-campbell.jpg'
  //   },
  //   {
  //     id: 4,
  //     category_ids: [1, 2, 3],
  //     title: 't-shirt',
  //     description: 'soft and comfy touch. Cotton special.',
  //     price: 450.00,
  //     currency: 'dollars',
  //     colors: [1, 2, 3, 4, 5],
  //     sizes: ['S', 'M', 'L', 'XL'],
  //     src_img: 'deji-akinyele.jpg'
  //   },
  //   {
  //     id: 5,
  //     category_ids: [1, 2, 3],
  //     title: 't-shirt',
  //     description: 'soft and comfy touch. Cotton special.',
  //     price: 75.00,
  //     currency: 'dollars',
  //     colors: [1, 2, 3, 4, 5],
  //     sizes: ['S', 'M', 'L', 'XL'],
  //     src_img: 'ilona-panych.jpg'
  //   },
  //   {
  //     id: 6,
  //     category_ids: [1, 2, 3],
  //     title: 't-shirt',
  //     description: 'soft and comfy touch. Cotton special.',
  //     price: 750.00,
  //     currency: 'dollars',
  //     colors: [1, 2, 3, 4, 5],
  //     sizes: ['S', 'M', 'L', 'XL'],
  //     src_img: 'juan-manuel-merino.jpg'
  //   }
  // ]

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          productsArray.map(p => (
            <Link key={p.id} to={'/product/' + p.id}>
              <li key={p.id} className={styles.li}>
                {/* <img src={require('../../images/' + p.src_img)} alt='' /> */}
                <img src={require('../../images/' + p.src_img)} alt='' />
                <div className={styles.price}>{p.price}</div>
              </li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}
