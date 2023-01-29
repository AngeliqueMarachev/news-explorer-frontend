import "./Popup.css";
// import { NavLink } from "react-router-dom";

export default function Popup({ name, children, isOpen }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : " "}`}>
      <div className="popup__content">
        <h2 className="popup__header">{name}</h2>
        {children}
      </div>
    </div>
  );
}
