import './design/index.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Main } from "./pages/Main/Main";
import { Service } from "./pages/Service/Service";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/:service" element={<Service />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
