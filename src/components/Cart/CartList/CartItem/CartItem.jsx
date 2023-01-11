import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/cart';
import styles from './CartItem.module.css';
export const CartItem = ({title, price, img, service}) => {
  const dispatch = useDispatch();
  const removeFromCarttHandler = () => {
    dispatch(cartActions.removeFromCart({ service }));
  };
  return (
    <li className={styles.item}>
      <span className={styles.remove} onClick={removeFromCarttHandler}>×</span>
      <img src={img} alt="услуга" className={styles.img} />
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{price}₽/час</span>
    </li>
  );
};
