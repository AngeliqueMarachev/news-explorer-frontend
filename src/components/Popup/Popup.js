import { useEffect } from "react";
import "./Popup.css";

export default function Popup({
  name,
  children,
  isOpen,
  onClose
}) {
  
  // prevents code from running if isOpen is false
  useEffect(() => {
    if (!isOpen) {
      return;
    };

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      };
    };

    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    };
  };

  return (
    <div 
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlayClick}>
      <div className="popup__content">
        <h2 className="popup__header">{name}</h2>
        <button
          type="button"
          className="popup__close-button"
          onClick={() => onClose()} />
        {children}
      </div>
    </div>
  );
}
