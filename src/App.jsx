import './design/index.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { ServicePage } from "./pages/ServicePage/ServicePage";
import { CartPage } from './pages/CartPage/CartPage';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/:service" element={<ServicePage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
