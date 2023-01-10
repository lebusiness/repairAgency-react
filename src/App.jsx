import './design/index.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { ServicePage } from "./pages/ServicePage/ServicePage";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/:service" element={<ServicePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
