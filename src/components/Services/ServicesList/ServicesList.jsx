import { ServicesItem } from "./ServicesItem/ServicesItem";
import styles from "./ServicesList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getServices } from "../../../store/services";
import { servicesSelectors } from "../../../store/services/selectors";
import { Input, SkeletonBlock } from "../../../UI";

export const ServicesList = ({}) => {
  //dispatch на получение массива услуг
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState(false);

  const inputHandler = (e) => {
    setFilterValue(e.target.value);
  };
  const checkBoxHandler = (e) => {
    setSortValue((p) => !p);
  };
  let ServicesData = [...useSelector(servicesSelectors.selectServices)];
  const isLoading = useSelector(servicesSelectors.selectLoading);

  if (!isLoading && filterValue !== "") {
    ServicesData = ServicesData.filter((service) =>
      service.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  if (!isLoading && sortValue) {
    ServicesData = ServicesData.sort((a, b) => {
      return a.price - b.price
    });
  }
  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <Input
          value={filterValue}
          onInput={inputHandler}
          label="Поиск"
          className={styles.input}
          id="search"
          type="name"
          placeholder="Название услуги"
        />
        <Input
          checked={sortValue}
          onChange={checkBoxHandler}
          label="Сортировка по цене"
          className={styles.input}
          style={{cursor: 'pointer'}}
          id="sort"
          type="checkBox"
        />
      </form>
      {isLoading ? (
        <ul className={styles.list}>
          {[{}, {}, {}, {}].map((_, index) => (
            <li key={index}>
              <SkeletonBlock style={{ height: "300px" }} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.list}>
          {ServicesData.length !== 0 ? (
            ServicesData.map((service) => (
              <ServicesItem {...service} key={service.id} />
            ))
          ) : (
            <li>Не найдено.</li>
          )}
        </ul>
      )}
    </>
  );
};
