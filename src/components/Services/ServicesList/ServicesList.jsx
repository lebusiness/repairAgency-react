import { ServicesItem } from "./ServicesItem/ServicesItem";
import styles from "./ServicesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServices } from "../../../store/services";
import { servicesSelectors } from "../../../store/services/selectors";
import { SkeletonBlock } from "../../../UI/SkeletonBlock/SkeletonBlock";
export const ServicesList = ({}) => {
  //dispatch на получение массива услуг
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const ServicesData = useSelector(servicesSelectors.selectServices);
  const isLoading = useSelector(servicesSelectors.selectLoading);

  if (isLoading)
    return (
      <ul className={styles.list}>
        {[{}, {}, {}, {}].map((_, index) => (
          <li key={index}>
            <SkeletonBlock style={{height: '300px'}} />
          </li>
        ))}
      </ul>
    );

  return (
    <ul className={styles.list}>
      {ServicesData.map((service) => (
        <ServicesItem {...service} key={service.id} />
      ))}
    </ul>
  );
};
