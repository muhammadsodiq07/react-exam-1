import React from "react";
import Hero from "../Hero";
import About from "./About";
import Aside from "./Aside";
import Categories from "./Categories";
import DayProduct from "./DealProduct";
import Partner from "./Partner";
import Products from "./Products";
import TopProduct from "./Rated";

export default function Main() {
  return(
    <>
      <Hero />
      <About />
      <Categories />
      <DayProduct />
      <Products />
      <Aside />
      <TopProduct />
      <Partner />
    </>
  )
}