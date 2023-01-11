import styles from "./Feedbacks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { serviceSelectors } from "../../../store/service/selectors";
import { FeedbacksItem } from "./FeedbacksItem/FeedbacksItem";
import { Button, Input, SkeletonBlock } from "../../../UI";
import { useState } from "react";

import { serviceActions } from "../../../store/service";

export const Feedbacks = () => {
  const dispatch = useDispatch();

  const feedbacksData = useSelector(serviceSelectors.selectServiceFeedbacks);
  const isLoading = useSelector(serviceSelectors.selectLoading);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [evaluation, setEvaluation] = useState("");

  if (isLoading)
    return <SkeletonBlock style={{ height: "100px", marginTop: "30px" }} />;
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      serviceActions.addFeedback({
        name: name,
        comment: comment,
        evaluation: +evaluation,
      })
    );
    setName("");
    setComment("");
    setEvaluation("");
  };
  return (
    <>
      <ul className={styles.list}>
        {feedbacksData.map((feedback) => (
          <FeedbacksItem {...feedback} key={feedback.id} />
        ))}
      </ul>
      <form action="" className={styles.form} onSubmit={submitForm}>
        <div className={styles.inputWrapper}>
          <Input
            label="Оставить отзыв"
            placeholder="Имя"
            onInput={(e) => setName(e.target.value)}
            required
            value={name}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            placeholder="Комментарий"
            onInput={(e) => setComment(e.target.value)}
            required
            value={comment}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            placeholder="Оценка"
            max="5"
            min="2"
            onInput={(e) => setEvaluation(e.target.value)}
            type="number"
            required
            value={evaluation}
          />
        </div>
        <Button className={styles.button}>Отправить</Button>
      </form>
    </>
  );
};
