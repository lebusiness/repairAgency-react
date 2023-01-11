import styles from './Feedbacks.module.css'
import { useSelector } from "react-redux";
import { serviceSelectors } from "../../../store/service/selectors";
import { FeedbacksItem } from "./FeedbacksItem/FeedbacksItem";
import { SkeletonBlock } from '../../../UI';

export const Feedbacks = () => {
  const feedbacksData = useSelector(serviceSelectors.selectServiceFeedbacks);
  const isLoading = useSelector(serviceSelectors.selectLoading);
  
  if (isLoading)
    return <SkeletonBlock style={{ height: "100px", marginTop: "30px" }} />;

  return (
    <ul className={styles.list}>
      {feedbacksData.map((feedback) => (
        <FeedbacksItem {...feedback} key={feedback.id} />
      ))}
    </ul>
  );
};
