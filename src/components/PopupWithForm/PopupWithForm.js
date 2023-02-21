import "./PopupWithForm.css";
import Popup from "../Popup/Popup";
import { NavLink } from "react-router-dom";

export default function PopupWithForm({
  name,
  children,
  isOpen,
  onClose,
  onSigninClick,
  onRegisterClick
}) {

  const handleSigninClick = () => {
    onSigninClick();
    onClose();
  }

  const handleRegisterClick = () => {
    onRegisterClick();
    onClose();
  }

  return (
    <Popup
      name={name}
      isOpen={isOpen}
      onClose={onClose}>
      <form className="form" autoComplete="off">
        {children}
        <button type="submit" className="form__submit" disabled>{name}</button>
      </form>
      <p className="form__subtitle">
        or&nbsp;
        <NavLink
          className="form__link"
          onClick={name === 'Sign in' ? handleRegisterClick : handleSigninClick}>
          {name === 'Sign in' ? 'Sign up' : 'Sign in'}
        </NavLink>
      </p>
    </Popup>
  );
}
