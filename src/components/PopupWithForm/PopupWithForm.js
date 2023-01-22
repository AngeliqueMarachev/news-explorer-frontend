import React from "react";
import "./PopupWithForm.css";

export default function PopupWithForm({ title, children }) {
  return (
    <>
   
    <button></button>
    <div className="popup__overlay">
      <div className="popup">
        <h6 className="popup__title">{title}</h6>
        {children}
      </div>
      </div>
      </>
  );
}
