import React from 'react';
import Header from '../Header/Header';
import Unlimites from '../Unlimites/Unlimites';
import "./Notifigation.scss";

function Notifigation() {
  return (
    <>
      <div className="notifigation d-flex justify-content-between">
        <div className="notifigation__header">
            <Header/>
        </div>
        <div className="notifigation__center">
              <p className="notif__h2">
              Notifigation
              </p>
              <div className="notif__div d-flex align-items-center">
                <p className="notif__p me-4">
                  All
                </p>
                <p className="notif__p">
                Responses
                </p>
              </div>
              <hr className="notif__hr"/>
              <div className="notif__your d-flex align-items-center justify-content-between">
                  <p className="notif__all">
                  You're all caught up.
                  </p>
                  <span className="notif__span-right">
                  Your stats
                  </span>
              </div>
        </div>
        <div className="notifigation__unlimite">
              <Unlimites/>
        </div>
      </div>
    </>
  )
}

export default Notifigation
