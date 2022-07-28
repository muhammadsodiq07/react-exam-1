import React from "react";
import { Route, Routes } from "react-router-dom";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderMain from "./components/Header/Main";
import Refresh from "./components/Modal/Refresh";
import Navbar from "./components/Navbar/Navbar";
import Time from "./components/Modal/Time";
import ProductInfo from "./components/Main/ProductInfo";
import MyCart from "./components/Modal/MyCart";
import Wishlist from "./components/Modal/Wishlist";
import QuickView from "./components/Modal/QuickView";
import Main from "./components/Main";

function App() {
  return (
    <>
    <Header />
    <HeaderMain />
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="product/:id" element={<ProductInfo />} />
      </Routes>
      <Footer />
      <QuickView />
      <MyCart />
      <Wishlist />
      <Refresh />
      <Time />
      <Buttons />
    </>
  );
}

export default App;
