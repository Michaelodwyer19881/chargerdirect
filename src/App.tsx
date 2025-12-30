import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import "./App.css";
import ComingSoon from "./pages/ComingSoon";
import Hospitals from "./pages/Hospitals";
import Venue from "./pages/Venue";
import Apps from './pages/Apps';       // renamed page


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/venues" element={<Venue />} />
        <Route path="/app" element={<Apps/>} />

      </Routes>
    </Layout>
  );
}

export default App;
