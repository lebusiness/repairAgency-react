import { Container } from "../../UI";
import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.top}>
          <a href="./" className={styles.logo}>
            <span>Repair</span>Agency
          </a>
          <a href="nubmer" className={styles.number}>
            +7 (999) 133-52-12
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>Гостиная</li>
            <li>Ванная</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
