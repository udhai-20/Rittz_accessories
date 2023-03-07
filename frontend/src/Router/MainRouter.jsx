import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Enauiry from "../Pages/Enquiry/Enauiry";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Product from "../Pages/Product/Product";

function MainRouter(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/enquiry" element={<Enauiry />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRouter;
