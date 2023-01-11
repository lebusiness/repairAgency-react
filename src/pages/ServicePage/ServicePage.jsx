import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Feedbacks } from "../../components/Service/Feedbacks/Feedbacks";
import { ServiceInfo } from "../../components/Service/ServiceInfo/ServiceInfo";
import { Promo } from "../../Layout/Promo/Promo";
import { Section } from "../../Layout/Section/Section";
import { serviceSelectors } from "../../store/service/selectors";
import { PointsLoader } from "../../UI/PointsLoader/PointsLoader";

export const ServicePage = (props) => {
  //service - айди для переремаунта-перезапроса данных
  const { service } = useParams();

  //заголовок из запроса
  const fetchTitle = useSelector(serviceSelectors.selectServiceTitle);

  return (
    <>
      <Promo
        title={fetchTitle ??  <PointsLoader />}
        text={"Предоставляем качественный ремонт вашей квартиры"}
      />
      <Section title={fetchTitle ?? <PointsLoader />}>
        <ServiceInfo key={service}/>
      </Section>
      <Section title={'Отзывы'}>
        <Feedbacks />
      </Section>
    </>
  );
};
