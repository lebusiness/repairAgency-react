import styles from "./Promo.module.css";
import { Container } from "../../UI";

export const Promo = ({ title, text }) => {
  return (
    <section className={styles.promo}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      </Container>
    </section>
  );
};
