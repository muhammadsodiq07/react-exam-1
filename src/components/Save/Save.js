import React, { useState } from "react";
import "./Save.scss";
import Header from "../Header/Header";
import Unlimites from "../Unlimites/Unlimites";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function Save(props) {
  const [isTrue, setisTrue] = useState(false);

  const ModalOpen = () => {
    setisTrue(true);
  };

  const CloseModal = () => {
    setisTrue(!isTrue);
  };

  return (
    <>
      <Modal
        isTrue={isTrue}
        CloseModal={CloseModal}
        countRange={props.countRange}
        AddCategory={props.AddCategory}
        Count={props.Count}
        setCount={props.setCount}
        save={props.save}
        setSave={props.setSave}
        name={props.name}
      />
      <div className="save">
        <div className="save__header">
          <Header />
        </div>

        <div className="save__center">
          <div className="save__title-div">
            <h2 className="save__title">Your lists</h2>
            <button onClick={ModalOpen} className="save__button">
              New list
            </button>
          </div>
          <div className="save__saved-div d-flex align-items-center">
            <p className="save__saved-p saved1">Saved</p>
            <p className="save__saved-p">Highlight</p>
          </div>
          <hr className="save__hr" />
          <div className="save__creat">
            <div className="save__creat-main">
              <div className="save__creat-left">
                <p className="save__creat-p">
                  Create a list to easily organize and share stories
                </p>
                <button className="save__creat-btn">Start a list</button>
              </div>
              <div className="save__creat-right">
                <svg width={283} height={174} viewBox="0 0 283 174" fill="none">
                  <circle
                    opacity="0.15"
                    cx="141.5"
                    cy="87.5"
                    r="141.5"
                    fill="#E8F3E8"
                  />
                  <circle cx="141.5" cy="87.5" r="29.5" fill="#fff" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z"
                    fill="#0F730C"
                  />
                </svg>
              </div>
              <i class="bx bx-x save__icon-x"></i>
            </div>
          </div>
          <Link className="newSaveLink" to="/newsave"> 
                <div className="save__box d-flex mt-4">
                  <div className="save__box-left">
                    <h2 className="save__box-title">Reading list</h2>
                    <div className="save__box-btn-box">
                      <div className="save__box-btn-real-box">
                        <button className="save__box-btn">View list</button>
                      </div>
                    </div>
                  </div>
                  <div className="save__box-right d-flex">
                    <div className="save__box-one save__box-all">
                      <div className="save__box-grey"></div>
                    </div>
                    <div className="save__box-two save__box-all">
                      <div className="save__box-grey"></div>
                    </div>
                    <div className="save__box-three save__box-all">
                      <div className="save__box-grey"></div>
                    </div>
                  </div>
                </div>
                </Link>
          {props.save.map((item) => {
            return (
              <>
              <Link className="newSaveLink" to={`/newsavelist/${item.id}`}> 
                <div className="save__box d-flex mt-4">
                  <div className="save__box-left">
                    <h2 className="save__box-title">{item.name} list</h2>
                    <div className="save__box-btn-box">
                      <div className="save__box-btn-real-box">
                        <button className="save__box-btn">View list</button>
                      </div>
                    </div>
                  </div>
                  <div className="save__box-right d-flex">
                    <div className="save__box-one save__box-all">
                      <div className="save__box-grey"></div>
                    </div>
                    <div className="save__box-two save__box-all">
                      <div className="save__box-grey"></div>
                    </div>
                    <div className="save__box-three save__box-all">
                      <div className="save__box-grey"></div>
                    </div>
                  </div>
                </div>
                </Link>
              </>
            );
          })}
        </div>

        <div className="save__unlimite">
          <Unlimites />
        </div>
      </div>
    </>
  );
}

export default Save;
