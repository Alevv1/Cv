import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola, soy Alejandro</h1>
            <p className={styles.description}>Estudiante de ingeniería informatica y desarrollador FullStack</p>
            <a href="mailto:alejandrovallejos123@gmail.com" className={styles.contactBtm}>Contact Me</a>

        </div>
        <img src={getImageUrl("hero/hero1.JPG") } className={styles.heroImg} alt="ale" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>


    </section>

  )
}

