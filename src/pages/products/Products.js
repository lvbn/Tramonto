import React, {useEffect, useState} from 'react'
// testing
import styles from './Products.module.css'
import { Link, useParams } from 'react-router-dom'
import productsArray from '../../data/items.json'

export default function Products() {

  const { category } = useParams()
  console.log(productsArray, category)

  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    setFiltered(productsArray.filter(p => {
      if (p.category_ids.includes(category)) {
        return p
      }
    }))
  }, [category])

  // console.log('FILTERED: ', filtered)

  return (
    <div className={styles.container}>

      {/* <div className={styles.shop_by}>
        <h5>see</h5>
        <h1>{category}</h1>
      </div>

      <ul className={styles.list}>
        {
          filteredProducts.lenght ? filteredProducts
            .map(p => (
              <Link key={p.id} to={'/product/' + p.id}>
                <li key={p.id} className={styles.li}>
                  <img src={require('../../images/' + p.imgUrl[0])} alt='' />
                  <div className={styles.price}>{p.price}</div>
                </li>
              </Link>
            )) :
            <li className={styles.emptyLi}>

            </li>
        }
      </ul> */}

      {
        filtered.length > 0 ?
        // console.log('NON-EMPTY: ', filtered)
          <>
            <div className={styles.shop_by}>
              <h5>see</h5>
              <h1>{category}</h1>
            </div>

            <ul className={styles.list}>
              {
                filtered
                  .map(p => (
                    <Link key={p.id} to={'/product/' + p.id}>
                      <li key={p.id} className={styles.li}>
                        <img src={require('../../images/' + p.imgUrl[0])} alt='' />
                        <div className={styles.price}>{p.price}</div>
                      </li>
                    </Link>
                  ))
              }
            </ul>
          </>

          :
          // console.log('EMPTY: ', filtered)

          <>
            <div className={styles.shop_by}>
              <h5>sorry,</h5>
              <h1>We have nothing matching your search...</h1>
            </div>

            <div className={styles.emptySearch}>
              <img src={require('../../images/empty-search.jpg')} alt='' />
            </div>
          </>
      }

    </div>
  )
}
