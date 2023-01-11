import { Cart } from "../../components/Cart/Cart";
import { Section } from "../../Layout/Section/Section";

export const CartPage = () => {
  console.log("CartPage");
  return (
    <>
      <Section title={"Корзина"}>
        <Cart />
      </Section>
    </>
  );
};