import React from 'react'
import styles from './List.module.css'

import { Link } from 'react-router-dom';


export default function List() {
  const products = [
    { id: 1, src_img: 'alexander-krivitskiy.jpg', category: 'clothes' },
    { id: 2, src_img: 'caique-nascimento.jpg', category: 'jewelry' },
    { id: 3, src_img: 'ilona-panych.jpg', category: 'perfume' },
    { id: 4, src_img: 'deji-akinyele.jpg', category: 'watch' }
  ]

  return (
    <ul>
      {
        products.map(p => (
          <Link key={p.id} to='/products'>
            <li key={p.id} className={styles.li}>
              <img src={require('../../images/' + p.src_img)} alt='' />
              <div className={styles.categoryBanner}>{p.category}</div>
            </li>
          </Link>
        ))
      }
    </ul>
  )
}
