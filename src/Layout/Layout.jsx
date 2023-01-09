import { Container } from "../UI";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
