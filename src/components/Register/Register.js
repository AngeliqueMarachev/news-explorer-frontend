import PopupWithForm from "../PopupWithForm/PopupWithForm";
// import { Link } from "react-router-dom";
import { useState } from "react";

export default function Register({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  // if (!show) {
  //   return null;
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    handleSubmit(userData);
  };

  return (
    <PopupWithForm name="Sign up" isOpen={isOpen} onClose={onClose}>
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="email"
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <span className="form__error">Houston, we have a problem</span>

      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter password"
        type="password"
        value={password || ""}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <label className="form__label">Username</label>
      <input
        className="form__input"
        placeholder="Enter your username"
        type="text"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
    </PopupWithForm>
  );
}
