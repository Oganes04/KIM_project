import React, { FC } from "react";
import "./IdSession.css";

const IdSession: FC = () => {
 return (
    <div className="test-section">
      <div className="container test-container">
        <div className="wrapper" id="wrapper-main">
          <div className="id-session">
            <label className="id-session__label" htmlFor="id-input">
              Введите ID сессии
            </label>
            <input className="id-session__input" id="id-input" type="text" placeholder="0123456789" />
            <div className="continue-btn">
              <div></div>
              <a href="#">Продолжить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default IdSession;