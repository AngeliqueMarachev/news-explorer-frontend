// import { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useForm from '../../utils/useForm';

export default function Login({ isOpen, onClose, onRegisterClick, onLogin }) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const { values, handleChange } = useForm({ email: "", password: "" });

  function handleSubmit() {
    onLogin(values);
  }

  return (
    <PopupWithForm
      name="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onRegisterClick={onRegisterClick}
      onSubmit={handleSubmit}
    >
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="email"
        name="email"
        onChange={handleChange}
        required
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      ></input>
      <span className="form__error">Invalid email address</span>
      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter Password"
        type="password"
        name="password"
        onChange={handleChange}
        required
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      ></input>
      <span className="form__error">Invalid password</span>
    </PopupWithForm>
  );
}
