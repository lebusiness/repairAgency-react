import styles from "./Section.module.css";
import { Container } from "../../UI";

export const Section = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};
