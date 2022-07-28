import React from "react";
import { Link, useLocation } from "react-router-dom";
import Store from "../../Store/Store";

export default function ProdInfoHeader() {
  let location = useLocation()
  let data = Store(state => state.data)

  return(
    <section className="loc-box">
      {data.map((item, i) => {
        if(item.id == location.pathname.split("/").at(-1)) {
          return(
            <h4 key={i+795} className="loc-title">{item.name}</h4>
          )
        }
      })}
      <ul className="loc-list">
        <li className="loc-item">
          <Link className="loc-link" to='/'>
          Home
          <i className='bx bx-chevron-right'></i>
          </Link>
        </li>
        <li className="loc-item">
          <Link className="loc-link" to='/'>
          Organics
          <i className='bx bx-chevron-right'></i>
          </Link>
        </li>
        <li className="loc-item">
          <Link className="loc-link" to='/'>
          Vegetables
          <i className='bx bx-chevron-right'></i>
          </Link>
        </li>
        <li className="loc-item">
          <Link className="loc-link" to='/'>
          Daily Vegetables
          <i className='bx bx-chevron-right'></i>
          </Link>
        </li>
        <li className="loc-item">
          <Link className="loc-link" to='/'>
          Root Vegetables
          </Link>
        </li>
      </ul>
    </section>
  )
}