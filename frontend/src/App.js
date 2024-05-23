import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/prductDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Add from "./pages/admin/Add";
import Delete from "./pages/admin/Delete";
import { Box } from "@mui/material";

export default function App() {
  return (
    <>
      <Navbar />
      <Box sx={{
        minHeight:'555px'
      }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product-details/:name/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<Add />} />
        <Route path="/delete-product" element={<Delete />} />
      </Routes>
      </Box>
      <Footer />
    </>
  );
}
