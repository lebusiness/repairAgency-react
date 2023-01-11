import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getService, serviceActions } from "../../../store/service";
import { serviceSelectors } from "../../../store/service/selectors";
import { Button, SkeletonBlock } from "../../../UI";

import styles from "./ServiceInfo.module.css";
export const ServiceInfo = () => {
  const { service } = useParams();
  const dispatch = useDispatch();

  //получение данных о услуге по id и удаление данных и обрыв предыдущего запроса при демаунте
  useEffect(() => {
    const promise = dispatch(getService({ id: service }));
    return () => {
      promise.abort();
      dispatch(serviceActions.clearService());
    };
  }, [service, dispatch]);
  const feedbacksData = useSelector(serviceSelectors.selectServiceFeedbacks);

  const averageEvaluation =
    feedbacksData?.reduce((sum, cur) => sum + cur.evaluation, 0) /
    feedbacksData?.length;
  const { description, price, img } = useSelector(
    serviceSelectors.selectService
  );
  const isLoading = useSelector(serviceSelectors.selectLoading);
  return (
    <div className={styles.wrapper}>
      <div className={styles.media}>
        {!isLoading ? (
          <img src={img} alt="услуга" className={styles.img} />
        ) : (
          <SkeletonBlock style={{ height: "200px" }} />
        )}
        <div className={styles.evaluation}>
          <span>Оценка клиентов</span>
          <div>
            {!isLoading && feedbacksData.length ? (
              <span>{averageEvaluation} / 5.0</span>
            ) : (
              "... / 5.0"
            )}
            <span className={styles.star}>★</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>Об услуге ремонта</div>
        {!isLoading ? (
          <p className={styles.description}>{description}</p>
        ) : (
          <SkeletonBlock style={{ height: "40px", marginTop: "20px" }} />
        )}
        <div className={styles.priceInfo}>Цена бригады рабочих</div>
        {!isLoading ? (
          <div className={styles.price}>{price} ₽/час</div>
        ) : (
          <SkeletonBlock
            style={{
              marginTop: "14px",
              height: "35px",
              width: "140px",
              display: "inline-block",
              alignSelf: "flex-end",
            }}
          />
        )}
        <Button className={styles.button}>Добавить услугу в корзину</Button>
      </div>
    </div>
  );
};
