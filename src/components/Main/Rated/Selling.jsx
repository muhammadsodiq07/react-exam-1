import React from "react";
import { Link } from "react-router-dom";
import Store from "../../Store/Store";

export default function Selling() {
  const data = Store(state => state.data)
  const ids = Store((state) => state.cartId);

  const idHander = (e) => {
    ids(e);
  };

  return(
    <>
      {data.slice(6, 9).map((item, index) => {
        return (
          <li key={index+32} className="sales__itms">
            <div className="sales__box">
              <img
                className="sales__img"
                src={item.img[0]}
                alt="cherry"
              />
              <button
                onClick={() => idHander(item.id)}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight1"
                aria-controls="offcanvasRight"
                className="sales__btn"
              >
                <i className="bx bx-expand"></i>
              </button>
            </div>
            <div className="sales__inner">
              <Link className="sales__name" to={`product/${item.id}`}>
                {item.name}
              </Link>
              <div className="sales__star">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <div>
                <del className="sales__old">
                  ${item.discount_price.toFixed(1)}
                </del>
                <span className="sales__new">
                  ${item.to_price.toFixed(1)}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </>
  )
}