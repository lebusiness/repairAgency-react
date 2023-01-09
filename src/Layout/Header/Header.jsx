import { NavLink } from "react-router-dom";
import { Container } from "../../UI";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.top}>
          <NavLink to="/" className={styles.logo}>
            <span>Repair</span>Agency
          </NavLink>
          <a href="nubmer" className={styles.number}>
            +7 (999) 133-52-12
          </a>
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
                to="/gostinaya"
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
                to="/vannaya"
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
                to="/spalnaya"
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
