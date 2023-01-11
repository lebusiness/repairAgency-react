import styles from './FeedbacksItem.module.css'
export const FeedbacksItem = ({ name, comment, evaluation }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name} <span className={styles.star}>★</span>{evaluation}</p>
      <p className={styles.comment}>"{comment}"</p>
    </li>
  );
};
