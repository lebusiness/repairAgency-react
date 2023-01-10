import { useParams } from "react-router-dom";
import { Service } from "../../components/Service/Service";
import { Promo } from "../../Layout/Promo/Promo";
import { Section } from "../../Layout/Section/Section";

export const ServicePage = () => {
  const { service } = useParams();
  //selector возвращает itemData
  const itemData = {
    title: service,
    description: "Лучший ремонт " + service,
    price: 2000,
    feedbacks: [{}],
    img: '',
  };
  const { title, description, price, feedbacks, img } = itemData;
  return (
    <>
      <Promo title={title} text={"Лучшие " + title} />
      <Section title={"Ремонт " + title}>
        <Service />
      </Section>
    </>
  );
};
