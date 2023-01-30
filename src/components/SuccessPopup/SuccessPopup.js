import { NavLink } from "react-router-dom";
import Popup from "../Popup/Popup";

export default function SuccessPopup({ isOpen, handleCloseClick }) {
  return (
    <Popup name="Registration successfully completed!" isOpen={isOpen}>
      <NavLink className="form__link">Sign in</NavLink>
      <button className="popup__close-button" onClick={handleCloseClick} />
    </Popup>
  );
}
