import { useSelector } from "react-redux";
import { cartSelectors } from "../../store/cart/selectors";
import { Button } from "../../UI";
import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";

export const Cart = () => {
  const cartItems = useSelector(cartSelectors.selectCartItems)
  const totalPrice = cartItems.reduce(
    (prev, cur) => (prev += cur.price),
    0
  );
  return (
    <>
      <CartList />
      <div className={styles.confirmation}>
        <span className={styles.total}>
          <b>Общая стоимость</b>: {totalPrice}₽/час
        </span>
        <Button className={styles.button} disabled={!totalPrice} onClick={() => {alert(JSON.stringify(cartItems))}}>Подтвердить заказ</Button>
      </div>
    </>
  );
};
