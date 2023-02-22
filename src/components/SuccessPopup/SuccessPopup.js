import { NavLink } from "react-router-dom";
import Popup from "../Popup/Popup";

export default function SuccessPopup({ isOpen, onClose, onSignInClick }) {
  const handleSignInClick = () => {
    onClose();
    onSignInClick();
  }

  return (
    <Popup
      name="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}>
      <NavLink className="form__link" onClick={handleSignInClick}>Sign in</NavLink>
      <button className="popup__close-button" onClose={onClose} />
    </Popup>
  );
}
