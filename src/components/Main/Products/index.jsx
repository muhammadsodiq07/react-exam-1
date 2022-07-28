import React, { useState } from "react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

export default function Products() {
  const category = [
  {
      name: "Fruits",
      icon: "bx bxl-apple",
      active: true,
    },

    {
      name: "Vegetables",
      icon: "bx bxl-flask",
      active: false,
    },

    {
      name: "Milk & Cream",
      icon: "bx bx-cookie",
      active: false,
    },

    {
      name: "Banana",
      icon: "bx bx-baguette",
      active: false,
    },

    {
      name: "Sea Food",
      icon: "bx bx-bowl-hot",
      active: false,
    },
  ]

  const [filter, setFilter] = useState('Fruits')
  const [cates, setCates] = useState(category)

  const filterHandler = (e) => {
    cates.map(item => item.name === e ? item.active = true : item.active = false)
      setFilter(e)
  }

  useEffect(() => {
    setCates(cates)
  }, [cates])

  return(
    <section className="fproducts">
      <div className="container">
        <div className="fproducts__boxs">
          <h2 className="fproducts__title">Featured Products</h2>
          <ul className="fproducts__clist">
            {
              cates.map((type, ind) => {
                return(
                  <li key={ind+7523} className="fproducts__citem">
                    <button onClick={() => filterHandler(type.name)} className={`fproducts__cbtn ${type.active ? "fproducts__active" : ""}`}>
                      <i className={type.icon}></i>
                      <h3 className="fproducts__cname">{type.name}</h3>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>

        <ul className="fproducts__list">
          <ProductItem filter={filter} />
        </ul>
      </div>
    </section>
  )
}