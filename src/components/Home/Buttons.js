import React from "react";

export default function Caterories({ filterItems, type }) {
  return (
    <div className="btns-container">
      {type.map((type) => {
        return (
          <button
            key={type}
            className="home__btn"
            onClick={() => filterItems(type)}>
            {type}
          </button>
        );
      })}
    </div>
  );
}