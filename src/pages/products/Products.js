import React from 'react'

import styles from './Products.module.css'
import { Link } from 'react-router-dom'
import productsArray from '../../data/items.json'

export default function Products() {

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          productsArray.map(p => (
            <Link key={p.id} to={'/product/' + p.id}>
              <li key={p.id} className={styles.li}>
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
