import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function Login({ isOpen, handleCloseClick, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    onSubmit(userData);
  };

  // if (show) {
  //   return null;
  // }

  return (
    <PopupWithForm name="Sign in" isOpen={isOpen}>
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <span className="form__error"></span>
      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Password"
        type="password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      ></input>
      <button onSubmit={handleSubmit} type="submit" className="popup__close-button" onClick={handleCloseClick} />
      
    </PopupWithForm>
  );
}
