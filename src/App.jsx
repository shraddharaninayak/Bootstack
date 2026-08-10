import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import ScrollToTop from "./components/ScrollToTop";
import OurServiceDetails from "./pages/OurServiceDetails";
import CustomCursor from "./components/CustomCursor";

import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/:slug" element={<ServiceDetails />} />

        <Route path="/our-services/:slug" element={<OurServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
