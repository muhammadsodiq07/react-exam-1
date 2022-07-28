import React from "react";
import MyCartMain from "./MtCartMain";
import MyCartItem from "./MyCartItem";

export default function MyCart() {

  return(
    <section className="offcanvas offcanvas-end mycart" tabIndex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
      <button type="button" className="quickview__xbtn" data-bs-dismiss="offcanvas" aria-label="Close"><i className='bx bx-chevron-right'></i></button>

      <div className="mycart__bigbox">
        <h2 className="mycart__title">My cart</h2>

        <ul className="mycart__list">
          <MyCartItem />
        </ul>
        <MyCartMain />
      </div>
    </section>
  )
}