import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PartnerObj from "./PartnerObj";

export default function Partner() {
  return (
    <section className="partner">
      <div className="container">
        <Splide
          options={{
            perPage: 6,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "16px",
          }}
        >
          {PartnerObj.map((part) => {
            return (
              <SplideSlide key={part.id + 33}>
                <img className="partner__img" src={part.image} alt="partners-image" />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}
