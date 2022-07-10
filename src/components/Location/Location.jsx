import React from "react";
import "./Location.scss";
import { Link, useLocation } from "react-router-dom";
import useStore from "../../store/store";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

function Location() {
  let location = useLocation();

  const arr = useStore((state) => state.dealObj);
  
  return (
    <section className="location">
      {arr.map((item, i) => {
        if (item.id == location.pathname.split("/").at(-1)) {
          return (
            <>
              {arr.map((item) => {
                if (item.id === +location.pathname.split("/").at(-1)) {
                  return (
                    <div className="deals-inner">
                        <Header/>
                        <Hero/>
                      <div className="container">
                        <div className="fruit-info mt-4">
                          <div>
                            <div className="fruit-info__imgWrap">
                              <img
                                className="fruit-info__img"
                                src={item.image}
                                alt={item.name}
                                width="484"
                                height="533"
                              />
                              <span className="fruit-info__discount">
                                {item.discount}
                              </span>
                              <div className="fruit-info__btnWrap">
                                <button>
                                  <i className="bx bx-heart"></i>
                                </button>
                                <button>
                                  <i className="bx bx-refresh"></i>
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="fruit-info__right">
                            <h4>{item.name}</h4>
                            <del>${item.oldPrice}.00</del>
                            <span>${item.newPrice}.00</span>
                            <div className="d-flex">
                              <img
                                src=""
                                alt="fire"
                                width="18"
                                height="18"
                              />
                              <p className="fruit-info__sold">
                                {item.soldInHour}
                              </p>
                            </div>
                            <p>
                              Lorem Ipsum has been the industry’s standard dummy
                              text ever since the 1500s.
                            </p>
                            <div className="d-flex align-items-center">
                              <i className="bx bx-timer"></i>
                              <p className="fruit-info__sale m-0">
                                Hurry up! Sale end in:
                              </p>
                            </div>
                            <ul className="deals__time fruit-info__list d-flex mb-3">
                              <li>
                                <span>179</span>
                                <p>Days</p>
                              </li>
                              <li>
                                <span>03</span>
                                <p>Hours</p>
                              </li>
                              <li>
                                <span>19</span>
                                <p>Mins</p>
                              </li>
                              <li>
                                <span>59</span>
                                <p>Secs</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </>
          );
        }
      })}
    </section>
  );
}

export default Location;
