import React from "react";
import useStore from "../../store/store";
import Buttons from "./Buttons";
import "./Products.scss";

import { Link } from "react-router-dom";

function Products() {
  const dealObj = useStore((state) => state.dealObj);

  let categoryArr = [
    "Fruits",
    "Vegetables",
    "Milk & Cream",
    "Banana",
    "Sea Fodd",
  ];

  let typeArr = ["Fruits", "Vegetables", "Milk & Cream", "Banana", "Sea Fodd"];

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Featured Products</h2>
        <ul className="products__list d-flex align-items-center justify-content-center pt-2">
          {categoryArr.map((item, index) => {
            return <Buttons key={index} item={item} id={typeArr[index]} />;
          })}
        </ul>
        <ul className="products__list2 d-flex align-items-center justify-content-between flex-wrap pt-3">
          {dealObj.map((item, index) => {
            return (
              <Link className="products__links" to={`/Location/${item.id}`}>
                <li key={index} className="products__item">
                  <i className="bx bx-heart products__icon"></i>
                  <div className="products__inner-item">
                    <img
                      className="products__inner-img"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="products__inner-rel">
                      <p className="products__inner-name">{item.name}</p>
                      <span className="products__inner-span">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <div className="products__inner-box">
                    <div className="products__box-inner d-flex align-items-center">
                      <i className="bx bx-shopping-bag products__box-icon"></i>
                      <i className="bx bx-low-vision products__box-icon"></i>
                      <i className="bx bx-sync products__box-icon"></i>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Products;
