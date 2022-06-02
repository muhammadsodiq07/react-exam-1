import React from "react";
import "./Unlimites.scss";

function Unlimites() {
  return (
    <div className="unlitmit">
      <div className="unlimites__fixsed">
        <div className="unlimites__padding">
          <button className="unlimit__btn">Get unlitmited access</button>
          <div className="unlimit__input-div">
            <svg
              className="unlimit__svg"
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="rgba(8, 8, 8, 1)"
            >
              <path d="M20.07 18.93l-4.16-4.15a6 6 0 1 0-.88.88l4.15 4.16a.62.62 0 1 0 .89-.89zM6.5 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0z" />
            </svg>

            <input
              className="unlimit__input"
              type="text"
              placeholder="Search"
            />
          </div>
          <p className="unlimit__p pt-3">What We’re Reading Today</p>
          <div className="unlimit__avatar-div d-flex align-items-center">
            <img
              className="unlimit__avatar"
              src="https://miro.medium.com/fit/c/140/140/1*ntr-5B9JWMCE2CcIF9FsMw.jpeg"
              alt=""
            />
            <span className="unlimit__span">Benjamin Sledge</span>
          </div>
          <p className="unlimit__text pt-2">
            On Watching a Friend Die in Combat
          </p>
          <div className="unlimit__avatar-div d-flex align-items-center">
            <img
              className="unlimit__avatar"
              src="https://miro.medium.com/fit/c/140/140/1*ntr-5B9JWMCE2CcIF9FsMw.jpeg"
              alt=""
            />
            <span className="unlimit__span">Benjamin Sledge</span>
          </div>
          <p className="unlimit__text pt-2">
            On Watching a Friend Die <br /> in Combat On Watching a Friend Die
            in Combat
          </p>
          <div className="unlimit__avatar-div d-flex align-items-center">
            <img
              className="unlimit__avatar"
              src="https://miro.medium.com/fit/c/140/140/1*ntr-5B9JWMCE2CcIF9FsMw.jpeg"
              alt=""
            />
            <span className="unlimit__span">Benjamin Sledge</span>
          </div>
          <p className="unlimit__text pt-2">
            On Watching a Friend Die in Combat
          </p>
          <span className="unlimit__see">See the full list</span>
          <div className="unlimit__logo d-flex align-items-center pt-3">
            <svg viewBox="0 0 1043.63 592.71" className="unlimit__logo-img">
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" />
                </g>
              </g>
            </svg>
            <svg width={19} height={19} className="la">
              <path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z" fillRule="evenodd" />
            </svg>
            <svg width={29} height={29} className="twiter">
              <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z" />
            </svg>
          </div>
          <p className="unlimit__description pt-2">
            Discover Medium writers you already <br /> follow on Twitter.
          </p>
          <button className="unlimit__button">
            <div className="unlimit__button-div d-flex align-items-center">
              <svg width={29} height={29} className="twiter">
                <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z" />
              </svg>
              <p className="p-0 m-0">Connect to Twitter</p>
            </div>
          </button>
          <p className="maybe">Maybe Later</p>
        </div>
      </div>
    </div>
  );
}

export default Unlimites;
