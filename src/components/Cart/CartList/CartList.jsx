import { useSelector } from "react-redux";
import { cartSelectors } from "../../../store/cart/selectors";
import { CartItem } from "./CartItem/CartItem";
import { CartItemTop } from "./CartItem/CartItemTop";
import styles from "./CartList.module.css";
export const CartList = () => {
  const cartItems = useSelector(cartSelectors.selectCartItems);
  if(cartItems.length === 0) return <p className={styles.empty}>Корзина пуста.</p>
  
  return (
    <ul className={styles.list}>
      <CartItemTop />
      {cartItems.map((item, index) => (
        <CartItem {...item} key={index} />
      ))}
    </ul>
  );
};
