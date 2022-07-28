import React from "react";
import Store from "../../Store/Store";

export default function DealButton() {
  let data = Store(state => state.data)

  return(
    <>
      {
        data.map((element, ind) => {
          if(element.id <= 4) {
            return(
              <button key={ind+8712} className={ind === 0 ? "active": ''} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={ind} aria-current={ind === 0 ? true : false} aria-label="Slide 1">
              <div className="d-flex">
                <div className="deal__btnimg">
                  <img src={element.img[0]} alt={element.name} />
                </div>
                <div className="d-flex flex-column">
                  <h4 className="deal__btnname">{element.name} </h4>
                  <p className="deal__btnprice"><del>${element.from_price}</del> ${element.to_price}</p>
                </div>
              </div>
            </button>
            )
          }
        })
      }
    </>
  )
}