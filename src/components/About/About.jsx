import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, rerum rem deleniti nobis amet voluptatibus tempora obcaecati accusamus, impedit necessitatibus magni aut temporibus iste beatae ullam iusto. Error, voluptatem ex?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ut distinctio ea expedita nisi culpa consequuntur assumenda placeat error corrupti quos ex molestias vel provident, voluptas molestiae amet deserunt architecto.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, animi tempora, quas ullam odit magnam nulla quia dolores adipisci repellat dignissimos! Odio recusandae quo blanditiis veniam error deleniti explicabo dicta!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};