import { ServicesItem } from "./ServicesItem/ServicesItem";
import styles from "./ServicesList.module.css";
export const ServicesList = ({}) => {
  const ServicesData = [
    {
      id: "1",
      title: "Гостиная",
      url: "gostinaya",
      text: "Ремонт гостиной в кратчайшие сроки",
      img: "static/media/services.b4ddca44acedc36eacee.jpg",
    },
    {
      id: "2",
      title: "Ванная",
      url: "vannaya",
      text: "Ремонт ванной в кратчайшие сроки",
      img: "static/media/services.b4ddca44acedc36eacee.jpg",
    },
    {
      id: "3",
      title: "Спальная",
      url: "spalnaya",
      text: "Ремонт спальной в кратчайшие сроки",
      img: "static/media/services.b4ddca44acedc36eacee.jpg",
    },
  ];
  return (
    <ul className={styles.list}>
      {ServicesData.map((service) => (
        <ServicesItem {...service} key={service.id} />
      ))}
    </ul>
  );
};
