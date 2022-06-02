import React from "react";
import "./NewSave.scss";
import name from "../../assets/imgs/muhammad-name-img.jpg";
import Header from "../Header/Header";
import Unlimites from "../Unlimites/Unlimites";
import { Link } from "react-router-dom";
import "../Home/Artical/Artical.scss";

function NewSave(props) {
  return (
    <>
      <div className="NewSave d-flex  justify-content-between">
        <div className="newsave__header">
          <Header />
        </div>
        <div className="newsave">
          <div className="newsave__main d-flex align-items-center justify-content-between">
            <div className="newsave__left">
              <div className="newsave__logo-div">
                <img className="newsave__img" src={name} alt="muhammadsodiq" />
              </div>
              <div>
                <p className="newsave__name m-0">Muhammadsodiq Koziyev</p>
                <span className="newsave__span">May 2</span>
              </div>
            </div>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                fill="#000"
              />
            </svg>
          </div>
          <p className="newsave__title">Reading list</p>
          {props.newsave.map((item,i) => {
            return (
              <>
                <div>
                  <p className="newsave__note">Add a note...</p>
                </div>
                <li key={i} className="home__item pt-5  ">
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
                          
                          <button className="openAdd" id={item.id}>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              class="sx"
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
        </div>
        <div className="newsave__ultimate">
          <Unlimites />
        </div>
      </div>
    </>
  );
}

export default NewSave;
