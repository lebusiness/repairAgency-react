import { useSelector } from "react-redux";
import { cartSelectors } from "../../store/cart/selectors";
import { Button } from "../../UI";
import styles from "./Cart.module.css";
import { CartList } from "./CartList/CartList";

export const Cart = () => {
  const totalPrice = useSelector(cartSelectors.selectCartItems).reduce(
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
        <Button className={styles.button} disabled={!totalPrice} >Подтвердить заказ</Button>
      </div>
    </>
  );
};
