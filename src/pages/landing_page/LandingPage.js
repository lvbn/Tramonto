import React from 'react'
import List from '../../components/list/List'
import styles from './Landing_page.module.css'

export default function Landing_page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cristopher}>
          <img src={require('../../images/christopher-campbell.jpg')} alt=''/>
          <div className={styles.collections}>Men's Collection</div>
        </div>
        <div className={styles.ryan}>
          <img src={require('../../images/ryan-jacobson.jpg')} alt=''/>
          <div className={styles.collections}>Women's Collection</div>
        </div>
      </div>

      <div className={styles.shop_by}>
        <h5>Shop by</h5>
        <h1>Category</h1>
      </div>

      <List />

      <section className={styles.four_pics}>
        <div className={styles.pic}>
          <img src={require('../../images/Highway_Mountains.png')} alt=''/>
        </div>
        <div className={styles.pic}>
          <img src={require('../../images/alexander-krivitskiy.jpg')} alt=''/>
        </div>
        <div className={styles.pic}>
          <img src={require('../../images/juan-manuel-merino.jpg')} alt=''/>
        </div>
        <div className={styles.pic}>
          <img src={require('../../images/Snow_Mountains.png')} alt=''/>
        </div>
      </section>
    </>
  )
}
