import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Layout>
  );
}

export default App;
