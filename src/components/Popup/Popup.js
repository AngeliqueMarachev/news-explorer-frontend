import "./Popup.css";
import { NavLink } from "react-router-dom";

export default function Popup({ name }) {
  return (
    <div className="popup">
      <div className="popup__content">
        <h2 className="popup__header">{name}</h2>
        <button className="popup__close-button" />
        <form className="popup__form"  autoComplete="off">
          <label className="popup__label">Email</label>
          <input
            className="popup__input"
            placeholder="Enter email"
                      type="text"
          ></input>
          <span className="popup__error"></span>
          <label className="popup__label">Password</label>
          <input
            className="popup__input"
            placeholder="Password"
                      type="password"
          ></input>
          <button className="popup__submit">{name}</button>
        </form>
        <p className="popup__subtitle">
          or&nbsp;
          <NavLink className="popup__link">
          </NavLink>
        </p>
      </div>
    </div>
  );
}
