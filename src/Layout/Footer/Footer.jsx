import { Container } from "../../UI";
import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <a href="tel:+79991335212" className={styles.number}>
          +7 (999) 133-52-12
        </a>
      </Container>
    </footer>
  );
};
