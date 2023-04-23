import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useEffect } from "react";
import useFormWithValidation from "../../utils/FormValidation";

export default function Register({
  isOpen,
  onClose,
  onSigninClick,
  onRegister,
  isCommonError,
}) {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation({ email: "", password: "", name: "" });

  // reset form values when isOpen and/or values change, or resetForm() is triggered
  useEffect(() => {
    resetForm();
    setValues({ email: "", password: "", name: "" });
  }, [isOpen, resetForm, setValues]);

  function handleSubmit() {
    onRegister(values);
  }

  return (
    <PopupWithForm
      name="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSigninClick={onSigninClick}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="email"
        name="email"
        onChange={handleChange}
        value={values.email}
        required
      ></input>
      <span
        className={`form__error email-error  ${
          errors["email"] && "form__error_visible"
        }`}
      >
        Invalid email
      </span>

      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter password"
        type="password"
        name="password"
        onChange={handleChange}
        value={values.password}
        minLength="8"
        required
      ></input>
      <span
        className={`form__error password-error ${
          errors["password"] && "form__error_visible"
        }`}
      >
        Invalid password
      </span>

      <label className="form__label">Username</label>
      <input
        className="form__input"
        placeholder="Enter your username"
        type="text"
        name="name"
        onChange={handleChange}
        value={values.name}
        minLength="3"
        required
      ></input>
      <span
        className={`form__error name-error ${
          errors["name"] && "form__error_visible"
        }`}
      >
        Invalid username
      </span>

      <span
        className={`form__error form__error_general ${
          isCommonError && "form__error_visible"
        }`}
      >
        This email is not available
      </span>
    </PopupWithForm>
  );
}
