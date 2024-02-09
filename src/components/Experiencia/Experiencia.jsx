import React from 'react'

import styles from "./Experiencia.module.css";
import { getImageUrl } from "../../utils";
function Experiencia() {
  return (
    <section className={styles.container} id='experiencia'>
        <h3 className={styles.title}>Experiencia</h3>
        <div className={styles.content}>
            <img src={getImageUrl("skills/css.png")} alt="css"/>
            <img src={getImageUrl("skills/html.png")} alt="" />
            <img src={getImageUrl("skills/figma.png")} alt="" />
            <img src={getImageUrl("skills/graphql.png")} alt="" />
            <img src={getImageUrl("skills/node.png")} alt="" />
            <img src={getImageUrl("skills/react.png")} alt="" />
        </div>
    </section>
  )
}

export default Experiencia