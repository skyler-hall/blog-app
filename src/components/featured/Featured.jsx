import React from 'react'
import styles from "./featured.module.css"
import Image from "next/image"

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container}><b>Hey, Culture Dev!</b>Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos in consequuntur et illo laboriosam quaerat laborum? Impedit cum, nesciunt qui a eligendi sed quod, nobis aliquam, exercitationem porro architecto?</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius mollitia suscipit quod nam repellendus eaque doloribus assumenda soluta, consequatur corrupti a aliquam eveniet vitae dicta ad, alias voluptatibus quidem.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured