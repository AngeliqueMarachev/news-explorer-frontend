import "./PopupWithForm.css";
import Popup from "../Popup/Popup";
import { NavLink } from "react-router-dom";

export default function PopupWithForm({ name, children, isOpen }) {
  return (
    <Popup
      name={name}
      isOpen={isOpen}>
      <form className="form" autoComplete="off">
        {children}
        <button className="form__submit">{name}</button>
      </form>
      <p className="form__subtitle">
        or&nbsp;
        <NavLink className="form__link">
          {name === "Sign in" ? "Sign up" : "Sign in"}
        </NavLink>
      </p>
    </Popup>
  );
}
