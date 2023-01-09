import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import './design/index.scss';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<h1>hello</h1>} />
          <Route path="hey" element={<h1>hey</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
