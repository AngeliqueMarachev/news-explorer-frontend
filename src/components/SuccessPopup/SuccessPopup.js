import { Link } from "react-router-dom";
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
      <Link to={'#'} className="form__link" onClick={handleSignInClick}>Sign in</Link>
    </Popup>
  );
  
}
