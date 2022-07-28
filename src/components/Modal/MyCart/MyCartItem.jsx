import React from "react";
import Store from "../../Store/Store";

export default function MyCartItem() {

  const myCartObj = Store(state => state.myCartObj)
  const myCartMinus = Store(state => state.myCartMinus)
  const myCartAdd = Store(state => state.myCartAdd)
  const myCartDel = Store(state => state.myCartDel)

  return(
    <>
      {
        myCartObj.map((item, index) => {
          return(
            <li key={index+99} className="mycart__item">
              <div className="mycart__imgbox">
                <img src={item.img[0]} alt="product" />
              </div>
              <div className="mycart__box">

              <div className="d-flex justify-content-between align-items-center mb-2">
                <h3 className="mycart__name">{item.name}</h3>
                <button onClick={() => myCartDel(item)} className="mycart__removebtn"><i className='bx bx-x'></i></button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <input className="quickview__input" type="text" Value={item.count} placeholder={item.count} />
                  <div className="d-flex flex-column">
                    <button onClick={() => myCartAdd(item)} className="quickview__plus">+</button>
                    <button onClick={() => myCartMinus(item)} className="quickview__plus">-</button>
                  </div>
                    <p className="mycart__price">x ${item.to_price}</p>
                </div>
                <p className="mycart__totalprice">${item.to_price * item.count}</p>
              </div>
              </div>
            </li>
          )
        })
      }
    </>
  )
}