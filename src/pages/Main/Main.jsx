import { Services } from "../../components/Services/Services";
import { Promo } from "../../Layout/Promo/Promo";
import { Section } from "../../Layout/Section/Section";

export const Main = () => {
  return (
    <>
      <Promo
        title="RepairAgency"
        text="Предоставляем качественный ремонт вашей квартиры"
      />
      <Section title={"Услуги"}>
        <Services />
      </Section>
    </>
  );
};