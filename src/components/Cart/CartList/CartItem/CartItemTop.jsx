import styles from './CartItem.module.css';
export const CartItemTop = () => {
  return (
    <li className={styles.item}>
      <span className={styles.remove}></span>
      <span className={styles.photo}><b>Фото</b></span>
      <span className={styles.title}><b>Название услуги</b></span>
      <span className={styles.price}><b>Стоимость услуги</b></span>
    </li>
  );
};
