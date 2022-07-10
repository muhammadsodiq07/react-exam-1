import React from "react";
import useStore from "../../store/store";




function Buttons(props) {

const dealObj = useStore((state) => state.dealObj);

  const typeHandler = (e) => {
    
    let btnValue = e.target.textContent
    if (btnValue === "Fruits") {
        dealObj.filter((item) => {
          return item.type === e.target.id;
        })
    } else if (e.target.id === "Vegetables") {
        dealObj.filter((item) => {
          return item.type === e.target.id;
        })
    } else if (e.target.id === "Milk & Cream") {
        dealObj.filter((item) => {
          return item.type === e.target.id;
        })
    } else if (e.target.id === "Banana") {
        dealObj.filter((item) => {
          return item.type === e.target.id;
        })
    }
    else if (e.target.id === "Sea Fodd") {
        dealObj.filter((item) => {
          return item.type === e.target.id;
        })
    }
  };

  return (
    <li className="category__item">
      <button className="button__btn" onClick={typeHandler} id={props.id}>
      {props.item}
      </button>
    </li>
  );
}

export default Buttons;