import React from "react";
import { Link } from "react-router-dom";
import Store from "../../Store/Store";

export default function DealItem() {
  let data = Store(state => state.data)
  let myCartAdd = Store(state => state.myCartAdd)

  return(
    <>
    {
      data.map((item, index) => {
        if(item.id <= 4) {
          return(
            <li key={index+324} data-bs-interval="0" id={item.id} className={`deal__item carousel-item ${item.id === 1 ? "active" : ''} `}>
              <div className="deal__items">
              <div className="deal__imgbox">
                <img src={item.img[0]} alt={item.name} />
              </div>

              <div className="deal__box">
                <Link className="deal__category-link" to="/" >
                Chilies, Garlic, Lemon
                </Link>

                <h3 className="deal__name"><Link to={`product/${item.id}`} className="deal__name-link">{item.name}</Link></h3>

                <div className="d-flex align-items-center mb-4">
                  <del className="deal__sale">${item.from_price}</del>
                  <span className="deal__price">${item.to_price}</span>
                </div>

                <div className="d-flex mb-2">
                  <p className="deal__date">
                    <span className="deal__date-time">178</span>
                    Days
                  </p>
                  <p className="deal__date">
                    <span className="deal__date-time">18</span>
                    hours
                  </p>
                  <p className="deal__date">
                    <span className="deal__date-time">58</span>
                    mins
                  </p>
                  <p className="deal__date">
                    <span className="deal__date-time">18</span>
                    secs
                  </p>
                </div>

                <div className="deal__soldbox d-flex justify-content-between align-items-center mb-1">
                  <p className="deal__sold">Already Sold: <span className="deal__sold-span">{item.sold_hours}</span></p>
                  <p className="deal__sold">Available: <span className="deal__sold-ava">{item.sold}</span></p>
                </div>
                <div className="deal__range">
                  <div className="deal__range-pro">
                  </div>
                </div>

                <button onClick={()=> myCartAdd(item)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" className="deal__addbtn">Add to cart</button>
              </div>
              </div>
            </li>
          )
        }
      })
    }
    </>
  )

}