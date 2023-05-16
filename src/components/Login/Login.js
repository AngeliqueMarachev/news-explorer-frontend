import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useEffect } from "react";
import useFormWithValidation from "../../utils/FormValidation";

export default function Login({
  isOpen,
  onClose,
  onRegisterClick,
  onLogin,
  isCommonError,
}) {
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation({ email: "", password: "" });

  useEffect(() => {
    resetForm();
    setValues({ email: "", password: "" });
  }, [isOpen, resetForm, setValues]);
  // }, [isOpen]);

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
        Invalid email address
      </span>
      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter Password"
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
      <span
        className={`form__error form__error_general ${
          isCommonError && "form__error_visible"
        }`}
      >
        Incorrect email or password
      </span>
    </PopupWithForm>
  );
}
