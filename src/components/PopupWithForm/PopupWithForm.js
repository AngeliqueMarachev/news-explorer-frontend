import "./PopupWithForm.css";
import Popup from "../Popup/Popup";
import { NavLink } from "react-router-dom";

export default function PopupWithForm({
  name,
  children,
  isOpen,
  onClose,
  onSigninClick,
  onRegisterClick,
  onSubmit,
  isValid,
}) {
  const handleSigninClick = () => {
    onClose();
    onSigninClick();
  };

  const handleRegisterClick = () => {
    onClose();
    onRegisterClick();
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        {children}
        <button
          type="submit"
          className={`form__submit ${!isValid && "form__submit_disable"}`}
          disabled={!isValid}
        >
          {name}
        </button>
      </form>
      <p className="form__subtitle">
        or&nbsp;
        <NavLink
          className="form__link"
          onClick={name === "Sign in" ? handleRegisterClick : handleSigninClick}
        >
          {name === "Sign in" ? "Sign up" : "Sign in"}
        </NavLink>
      </p>
    </Popup>
  );
}
