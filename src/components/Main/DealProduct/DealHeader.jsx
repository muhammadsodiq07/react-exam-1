import React from "react";

export default function DealHeader() {
  return(
    <div className="deal__inner">
      <h3 className="deal__title">Deal of the Day</h3>
      <div className="d-flex">
        <button className="deal__prevbtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <i className='bx bx-chevron-left'></i>
        Prev Deal
        </button>
        <span className="deal__span">|</span>
        <button className="deal__nextbtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            Next Deal
          <i className='bx bx-chevron-right'></i>
        </button>
      </div>
    </div>
  )
}