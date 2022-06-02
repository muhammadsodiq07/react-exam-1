import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Modal/Modal";
import "./Artical.scss";

function Artical({
  menuItems,
  save,
  setSave,
  countRange,
  AddCategory,
  Count,
  setCount,
  newsave,
  setnewsave,
  name,
}) {
  const [isTrue, setisTrue] = useState(false);
  const [color, setcolor] = useState(false);
  let [isClicked, setClick] = useState(false);

  

  const ModalOpen = () => {
    setisTrue(true);
  };

  const CloseModal = () => {
    setisTrue(!isTrue);
  };

  const chekBoxHandler = (id) => {
    let newSaved = newsave.filter((item) => {
      return id !== item.id;
    });
    setnewsave(newSaved);
  }

  const saveCotegories = (obj) => {
    isClicked !== obj.id ? setClick(obj.id) : setClick("");
    if (newsave.indexOf(obj) !== -1) return;
    setnewsave([...newsave, obj]);
    setcolor(!color);
  };

  return (
    <>
      <Modal
        isTrue={isTrue}
        CloseModal={CloseModal}
        countRange={countRange}
        AddCategory={AddCategory}
        Count={Count}
        setCount={setCount}
        save={save}
        setSave={setSave}
        name={name}
      />
      <ul className="home__list">
        {menuItems.map((item,i) => {
          return (
            <>
              <li key={i} className="home__item">
                <div className="home__avatar-div">
                  <img
                    className="home__avatar"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <p className="home__name">{item.name}</p>
                  <span className="home__data">{item.data}</span>
                </div>
                <div className="home__main-div">
                  <div>
                    <div>
                      <Link className="link__user" to={`/User/${item.id}`}>
                        <h2 className="home__title">{item.title}.</h2>
                        <p className="home__text">{item.decs}…</p>
                      </Link>
                    </div>
                    <div className="d-flex align-items-center mb-5 mt-3">
                      <button className="home__type-item">{item.type}</button>
                      <span className="home__read">{item.read}</span>
                      <span className="home__select">Selected for you</span>
                      <div className="home__save-div">
                        <div
                          style={{
                            display: isClicked === item.id ? "block" : "none",
                          }}
                          className="home__saved"
                        > 
                          <div className="home__chekbox-div d-flex flex-column">
                        <div className="home__as ps-2 pt-1">
                        <Checkbox
                        onChange={() => chekBoxHandler(item.id)}
                        defaultChecked color="success" />
                            <label className="m-0">Reading list</label>
                        </div>
                            {save.map((el) => {
                              return (
                                <>
                                  <div className="home__icons-save d-flex align-items-center">
                                    <Checkbox defaultChecked color="success" />
                                    <label className="m-0">{el.name}</label>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <hr />
                          <p onClick={ModalOpen} className="home__cheked">
                            Create new list
                          </p>
                        </div>
                        <button
                          onClick={() => saveCotegories(item)}
                          className="openAdd"
                          id={item.id}
                        >
                          <svg
                            className={`${color ? "black" : "white"}`}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                              fill="#000"
                            ></path>
                          </svg>
                        </button>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                            fill="#000"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img className="home__img" src={item.img} alt="" />
                  </div>
                </div>
              </li>
              <hr className="home__item-hr" />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Artical;
