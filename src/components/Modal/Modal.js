import { Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";

function Modal(props) {
  return (
    <div className={props.isTrue ? "d-block" : "d-none"}>
      <div className="backdrob"></div>
      <div className="modal__main">
        <div className="modal__padding">
          <button className="modal__x" onClick={props.CloseModal}>
            <svg className="dg" width={29} height={29}>
              <path
                d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className="modal__title-div">
            <h2 className="modal__title">Create new list</h2>
          </div>
          <input
            onChange={props.countRange}
            maxLength={60}
            className="modal__input"
            type="text"
            placeholder="Give it a name"
          />
          <p className="modal__count m-0 p-0">{props.Count}/60</p>
          <p className="modal__desc">Add description</p>
          <div className="modal__chek">
            <Checkbox color="success" />
            <span>Make it private</span>
          </div>
          <div>
            <button  onClick={props.CloseModal} className="modal__btn btn__cancel">Cancel</button>
            <Link to="/home/save">
            <button
              className={`modal__btn btn__create ${props.Count <= 0 ? "disabled" : ""}`}
              disabled={props.name.length >= 1 ? false : true}
              onClick={props.AddCategory}
            >
              Create
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
