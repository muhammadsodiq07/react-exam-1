import React from "react";
import DealButton from "./DealButton";
import DealHeader from "./DealHeader";
import DealItem from "./DealItem";

export default function DayProduct() {

  return (
   <section id="carouselExampleIndicators" className="deal carousel slide" data-bs-ride="carousel">
      <div className="container">
        <div className="deal__main">
          <div className="deal__left">
            <DealHeader />
            <ul className="deal__list carousel-inner">
              <DealItem />
            </ul>
          </div>
          <div className="deal__right carousel-indicators">
            <DealButton />
          </div>
        </div>
      </div>
  </section>
  )
}