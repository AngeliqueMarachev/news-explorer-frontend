import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function Login({ isOpen, onClose, onRegisterClick, setIsRegisterPopupOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userData = {
  //     email,
  //     password,
  //   };
  //   onSubmit(userData);
  // };

  return (
    <PopupWithForm
      name="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onRegisterClick={onRegisterClick}
      // setIsRegisterPopupOpen={setIsRegisterPopupOpen}
    >
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <span className="form__error">Invalid email address</span>
      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
       <span className="form__error">Invalid password</span>
    </PopupWithForm>
  );
}
