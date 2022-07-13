import React from "react";
import "./Rated.scss"
import { Link } from "react-router-dom";
import Store from "../../store/store";


export default function Rated() {

  const data = Store(state => state.data)
  const ids = Store((state) => state.cartId);

  const idHander = (e) => {
    ids(e);
  }
  return (
    <div className="sales">
      <div className="container">
        <ul className="sales__list p-0">
          <li className="sales__item col-4">
            <h3 className="sales__title">Top Rated</h3>
            <ul className="sales__lists">
            {data.slice(1, 4).map((item, key) => {
        return (
          <li key={key + 4} className="sales__itms">
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
              <Link className="sales__name" to={`/`}>
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
                  ${item.sold}
                </del>
                <span className="sales__new">
                  ${item.to_price}
                </span>
              </div>
            </div>
          </li>
        );
      })}
            </ul>
          </li>
          <li className="sales__item col-4">
            <h3 className="sales__title">Best Selling</h3>
            <ul className="sales__lists p-0">
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
              <Link className="sales__name" to={`/`}>
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
                ${item.sold}
                </del>
                <span className="sales__new">
                ${item.to_price}
                </span>
              </div>
            </div>
          </li>
        );
      })}
            </ul>
          </li>
          <li className="sales__item col-4">
            <h3 className="sales__title">On Sales</h3>
            <ul className="sales__lists p-0">
            {data.slice(20, 23).map((item, idd) => {
        return (
          <li key={idd +21} className="sales__itms">
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
              <Link className="sales__name"to={`/`}>
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
                ${item.sold}
                </del>
                <span className="sales__new">
                ${item.to_price}
                </span>
              </div>
            </div>
          </li>
        );
      })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}