import React, { useState } from "react";
import "./Comments.scss";
import logo from "../../assets/imgs/muhammad-name-img.jpg";
import Replay from "./Replay/Replay";

function Commetns(props) {
  const [addComments, setaddComments] = useState("");

  const [newCommentAdd, setNewCommentAdd] = useState(props.item.commetsArr);



  const addCommentHandler = (e) => {
    setaddComments(e.target.value);
  };

  const commentSaveHandler = (e) => {
    setNewCommentAdd([
      {
        commetsName: "Muhammadsodiq",
        commetnsDesc: addComments,
        userImg: logo,
        commentsClub: "0",
      },
      ...newCommentAdd,
    ]);
    setaddComments("");
  };



  const modalHideHandler = () => {
    props.setModal(false);
  };


  return (
    <>
      <div>
        <div
          className={`comment-fixed ${props.modal ? "comment-fixed-show" : ""}`}
        >
          <div>
            <div className="comment__input-div">
              <div className="comment__logo d-flex align-items-center">
                <img className="comment__img" src={logo} alt="" />
                <p className="comment__name">Muhammadsodiq Koziyev</p>
              </div>
              <textarea
                onChange={addCommentHandler}
                value={addComments}
                className="comment__input"
                type="text"
                placeholder="What are your thoughts?"
              />
              <div className="comment__dflex d-flex align-items-center justify-content-between">
                <div className="comment__bold d-flex align-items-center">
                  <p className="comment__italic m-0 p-0">
                    <svg className="comment__sc" width={21} height={21}>
                      <path
                        d="M10.3 18H4.4l.1-.9.8-.12c.55-.11.78-.23.78-.45V5.37c0-.22-.11-.34-.9-.45H4.5l-.11-.9h6.25c4.02 0 5.58 1.24 5.58 3.14 0 1.9-1.78 3.12-3.79 3.46v.11c2.7.34 4.25 1.56 4.25 3.57 0 2.35-2 3.7-6.37 3.7h.02-.02zM9.98 5.02h-1v5.47h1.23c1.79 0 2.79-1.23 2.79-2.68 0-1.69-1-2.8-3-2.8v.01zm-.22 6.36h-.78V17l1.22.22h.22c1.67 0 3.01-1 3.01-2.8 0-2.11-1.56-3-3.69-3h.02z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </p>
                  <p className="comment__italic m-0 p-0">
                    <svg className="comment__sc" width={21} height={21}>
                      <path
                        d="M9.85 18.04c-.54 0-2.03-.64-1.92-.85L9.95 9.5l-.64-.22-1.38 1.5-.43-.43c.53-1.17 1.7-2.67 2.77-2.67.54 0 2.24.54 2.14.86l-2.14 7.78.54.22 1.6-1.07.42.43c-.64 1.06-1.92 2.13-2.98 2.13zm2.34-11.73c-.96 0-1.38-.64-1.38-1.39 0-1.07.74-1.92 1.49-1.92.85 0 1.39.64 1.39 1.5-.11 1.06-.75 1.8-1.5 1.8z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </p>
                </div>
                <div>
                  <button className="comment__button">Cancel</button>
                  <button
                    onClick={commentSaveHandler}
                    className="comment__button comment__btn"
                  >
                    Respond
                  </button>
                </div>
              </div>
            </div>
            <ul className="comment__map p-0 ps-3">
              {newCommentAdd.map((el) => {
                return (
                  <>
                    <Replay
                      el={el}
                      addComments={addComments}
                      commentSaveHandler={commentSaveHandler}
                      addCommentHandler={addCommentHandler}
                    />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          onClick={modalHideHandler}
          className={`modal-back1 ${props.modal ? "modal-back1-show" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default Commetns;
