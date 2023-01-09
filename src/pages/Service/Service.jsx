import { useParams } from "react-router-dom";
import { Promo } from "../../Layout/Promo/Promo";
import { Section } from "../../Layout/Section/Section";


export const Service = () => {
  const { service } = useParams();

  return (
    <>
      <Promo title={service} text={"Лучшие " + service} />
      <Section title={'Ремонт ' + service}>

      </Section>
    </>
    
  );
};
