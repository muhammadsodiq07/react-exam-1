import React from "react";
//images
import imgs from "../../../images/placeholder.jpg"

export default function Refresh() {
  return(
    <section className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
      <div className="offcanvas-header">
        <div className="bottom-box text-center">
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body small bottom-body">
      <div className="bottom-box text-center">
        <h5 className="bottom-title" id="offcanvasBottomLabel">Compare Products</h5>
        <p className="bottom-text">(0 Products)</p>
        </div>
        <ul className="bottom-list">
          <li className="bottom-item">
            <img className="bottom-image" src={imgs} alt="image" />
          </li>
          <li className="bottom-item">
            <img className="bottom-image" src={imgs} alt="image" />
          </li>
          <li className="bottom-item">
            <img className="bottom-image" src={imgs} alt="image" />
          </li>
          <li className="bottom-item">
            <img className="bottom-image" src={imgs} alt="image" />
          </li>
        </ul>
      </div>
    </section>
  )
}