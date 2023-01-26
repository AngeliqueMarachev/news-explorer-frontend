import PopupWithForm from "../PopupWithForm/PopupWithForm";

export default function Login({ isOpen }) {
    
  return (
    <PopupWithForm name="Sign in" isOpen={isOpen}>
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
        placeholder="Password"
        type="password"
      ></input>
    </PopupWithForm>
  );
}