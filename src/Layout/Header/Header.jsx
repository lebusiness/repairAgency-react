import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartSelectors } from "../../store/cart/selectors";
import { Container } from "../../UI";
import { ReactComponent as Cart } from "./../../assets/layout/cart.svg";

import styles from "./Header.module.css";
export const Header = () => {
  const cartItemsLength = useSelector(cartSelectors.selectCartItems).length;
  const accountName = 'Леонид';
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.top}>
          <NavLink to="./" className={styles.logo}>
            <span>Repair</span>Agency
          </NavLink>
          <div className={styles.logic}>
          <span className={styles.account}>Профиль: {accountName}</span>
            <a href="tel:+79991335212" className={styles.number}>
              +7 (999) 133-52-12
            </a>
            <NavLink to="./cart" className={styles.cartWrap}>
              <Cart height={"40px"} width={"40px"} className={styles.cart} />
              {cartItemsLength}
            </NavLink>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? styles["list-item--active"]
                    : styles["list-item"];
                }}
                to="./gostinaya"
              >
                Гостиная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? styles["list-item--active"]
                    : styles["list-item"];
                }}
                to="./vannaya"
              >
                Ванная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? styles["list-item--active"]
                    : styles["list-item"];
                }}
                to="./spalnaya"
              >
                Спальная
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
