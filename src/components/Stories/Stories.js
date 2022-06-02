import "./Stories.scss";
import React from "react";
import "../Home/Artical/Artical.scss";
import Header from "../Header/Header";
import Unlimites from "../Unlimites/Unlimites";
import { Link } from "react-router-dom";

function Stories({ stories }) {
  return (
    <div className="d-flex justify-content-between">
      <div className="stories__header">
        <Header />
      </div>
      <div className="stories__center">
        <div className="stories__title-div">
          <h2 className="stories__title">Your stories</h2>
          <div className="stories__buttons d-flex align-items-center">
            <button className="stories__btn me-3">Write a story</button>
            <button className="stories__btn stories__import">
              Import a story
            </button>
          </div>
        </div>
        <p className="stories__published">Published</p>
        <hr />

        <ul className="home__list">
          {stories.map((item,i) => {
            return (
              <>
                <div key={i} className="stories__df d-flex flex-column mb-5">
                 <Link className="stLink" to={`/published/${item.id}`}>
                 <p className="stories__title">
                  {item.decs}
                  </p>
                 </Link>
                  <div className="stories__pub d-flex align-items-center">
                    <p className="stories__p m-0 p-0 me-2">Published on Jun 1.</p>
                    <span className="stories__span">1 min read</span>
                    <div>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                          fill="#000"
                        />
                      </svg>
                      <svg className="la" width={25} height={25}>
                        <path
                          d="M5 12.5c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41A1.93 1.93 0 0 0 7 10.5c-.55 0-1.02.2-1.41.59-.4.39-.59.86-.59 1.41zm5.62 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.59-1.41a1.93 1.93 0 0 0-1.41-.59c-.55 0-1.03.2-1.42.59-.39.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.58 1.41.4.4.87.59 1.43.59.56 0 1.03-.2 1.42-.59.39-.39.58-.86.58-1.41 0-.55-.2-1.02-.58-1.41a1.93 1.93 0 0 0-1.42-.59c-.56 0-1.04.2-1.43.59-.39.39-.58.86-.58 1.41z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <hr/>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="stories__unlimite">
        <Unlimites />
      </div>
    </div>
  );
}

export default Stories;
