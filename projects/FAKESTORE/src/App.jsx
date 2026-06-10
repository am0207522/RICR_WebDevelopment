import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import ContactUs from "./Pages/ContactUs";

const App = () => {
 return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;