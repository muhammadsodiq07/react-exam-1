import React from "react";
import ViewItem from "./ViewItem";

export default function QuickView() {

  return(
    <>
      <section className="offcanvas offcanvas-end quickview" tabIndex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
        <div className="quickview__bigbox">
          <button type="button" className="quickview__xbtn" data-bs-dismiss="offcanvas" aria-label="Close"><i className='bx bx-chevron-right'></i></button>
          <ViewItem />
        </div>
      </section>
    </>
  )
}