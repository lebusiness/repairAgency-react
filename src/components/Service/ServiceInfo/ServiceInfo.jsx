import { Button } from "../../../UI";
import styles from "./ServiceInfo.module.css";
export const ServiceInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        <img
          src="https://i.imgur.com/Rqca6Cm.jpg"
          alt="услуга"
          className={styles.img}
        />
        <div className={styles.evaluation}>
          <span>Оценка клиентов</span>
          <div>
            <span>5.0 / 5.0</span>
            <span className={styles.star}>★</span> 
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>Об услуге ремонта</div>
        <p className={styles.description}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className={styles.priceInfo}>Цена бригады рабочих</div>
        <div className={styles.price}>2000₽/час</div>
        <Button className={styles.button}>Добавить услугу в корзину</Button>
      </div>
    </div>
  );
};
