import styles from "./ServicesItem.module.css";

import { NavLink } from "react-router-dom";
import { Button } from "../../../../UI";
export const ServicesItem = ({ title, text, img, url, price }) => {
  return (
    <li className={styles.item}>
      <img src={img} alt="услуга" className={styles.img} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
        <div className={styles.targetWrapper}>
          <span className={styles.price}>{price}₽/час</span>
          <NavLink to={'./'+url} state={title}>
            <Button className={styles.button}>Перейти</Button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
