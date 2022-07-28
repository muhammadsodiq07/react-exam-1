import React, { useCallback, useEffect, useRef, useState } from "react";
import Store from "../../Store/Store";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "absolute",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

export default function MyCartMain() {
  const subtotal = Store(state => state.subtotal)
  const total = Store(state => state.total)
  const percentage = (subtotal * 100) / 200

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });

  }, [makeShot]);

  return(
    <>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="mycart__servis">
        <button className="mycart__servis-btn"><i className='bx bx-edit'></i> <br />
          Note
        </button>
        <span className="mycart__servis-span"></span>
        <button className="mycart__servis-btn"><i className='bx bxs-car'></i> <br />
          Shipping
        </button>
        <span className="mycart__servis-span"></span>
        <button className="mycart__servis-btn"><i className='bx bx-purchase-tag bx-flip-horizontal' ></i> <br />
        Cuppon</button>
      </div>

      <div className="mycart__total">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mycart__total-subtotal">Subtotal</p>
          <p className="mycart__total-subtotal">${subtotal}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mycart__total-shipping">Shipping</p>
          <p className="mycart__total-shipping"> {subtotal >= 200 ? "Free Shipping" : "Flat rate: $19.00"}</p>
        </div>
      </div>

      <div className="mycart__tprice">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mycart__tprice-total">Total</p>
          <p className="mycart__tprice-total">{subtotal >= 200 ? fire() : ""} ${subtotal >= 200 ? total-19 : total}</p>
        </div>

        <div className="mycart__tprice-rangebox">
          <div style={{width: `${percentage >= 100 ? 100 : percentage}%`}} className="mycart__tprice-range">
            <span className="mycart__tprice-rangespan">{percentage >= 100 ? 100 : percentage}%</span>
          </div>
        </div>
        <p className="mycart__tprice-desc">{subtotal >= 200 ? <span><i className='mycart__tprice-icon bx bx-check-circle'></i><span className="ms-4">Congratulations! You've got free shipping.</span> </span> : <span> Spend <span className="mycart__tprice-price">${200 - subtotal}</span> more to reach <span className="mycart__tprice-strong">Free shipping!</span> </span> }</p>
      </div>


      <button className="mycart__cartbtn">viwe cart</button>
      <button className="mycart__checkbtn">checkout</button>
    </>
  )
}