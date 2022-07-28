import React from "react";
import Rated from "./Rated";
import Sales from "./Sales";
import Selling from "./Selling";

export default function TopProduct() {
  return (
    <div className="sales">
      <div className="container">
        <ul className="sales__list">
          <li className="sales__item col-4">
            <h3 className="sales__title">Top Rated</h3>
            <ul className="sales__lists">
              <Rated />
            </ul>
          </li>
          <li className="sales__item col-4">
            <h3 className="sales__title">Best Selling</h3>
            <ul className="sales__lists">
              <Selling />
            </ul>
          </li>
          <li className="sales__item col-4">
            <h3 className="sales__title">On Sales</h3>
            <ul className="sales__lists">
              <Sales />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
