import React from "react";

function HeroMiddle() {
  return (
    <div className="heromiddle">
      <div className="container">
        <ul className="heromiddle__list d-flex align-items-center justify-content-around">
          <li className="heromiddle__item d-flex align-items-center flex-column">
            <i className="bx bxs-plane-alt heromiddle__icon"></i>
            <p className="heromiddle__text">Free Shipping</p>
            <span className="heromiddle__span">
              Free Shipping for all US order
            </span>
          </li>
          <li className="heromiddle__item d-flex align-items-center flex-column">
          <i className='bx bx-support heromiddle__icon'></i>
            <p className="heromiddle__text">Free Shipping</p>
            <span className="heromiddle__span">
              Free Shipping for all US order
            </span>
          </li>
          <li className="heromiddle__item d-flex align-items-center flex-column">
          <i className='bx bx-sync heromiddle__icon'></i>
            <p className="heromiddle__text">Free Shipping</p>
            <span className="heromiddle__span">
              Free Shipping for all US order
            </span>
          </li>
          <li className="heromiddle__item d-flex align-items-center flex-column">
          <i className='bx bxs-store heromiddle__icon'></i>
            <p className="heromiddle__text">Free Shipping</p>
            <span className="heromiddle__span">
              Free Shipping for all US order
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroMiddle;
