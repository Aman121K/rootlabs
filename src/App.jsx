import React, {lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import TermsAndConditions from "./components/sections/footerPage/TermsAndConditions.jsx";
import ContactForm from "./components/sections/contactPage/Contact.jsx";

// const ProductPage = lazy(() => import('./pages/ProductPage.jsx'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
