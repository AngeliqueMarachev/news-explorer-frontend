import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function Register({ isOpen }) {
  return (
    <PopupWithForm name="Sign up" isOpen={isOpen}>
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="text"
      ></input>
      <span className="form__error"></span>

      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter password"
        type="password"
      ></input>

      <label className="form__label">Username</label>
      <input
        className="form__input"
        placeholder="Enter your username"
        type="text"
      ></input>
    </PopupWithForm>
  );
}
