import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useForm from '../../utils/useForm';

export default function Register({
  isOpen,
  onClose,
  onSigninClick,
  onRegister }) {

  const { values, handleChange } = useForm({ email: '', password: '', name: '' })
  
  function handleSubmit() {
    onRegister(values);
  }

  return (
    <PopupWithForm
      name="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSigninClick={onSigninClick}
      onSubmit={handleSubmit}>
      
      <label className="form__label">Email</label>
      <input
        className="form__input"
        placeholder="Enter email"
        type="email"
        name="email"
        onChange={handleChange}
        required
      ></input>
      <span className="form__error">Invalid email</span>

      <label className="form__label">Password</label>
      <input
        className="form__input"
        placeholder="Enter password"
        type="password"
        name="password"
        onChange={handleChange}
        required
      ></input>
      <span className="form__error">Invalid password</span>

      <label className="form__label">Username</label>
      <input
        className="form__input"
        placeholder="Enter your username"
        type="text"
        name="name"
        onChange={handleChange}
        required
      ></input>
      <span className="form__error">Invalid username</span>

      <span className="form__error form__error-general">
        This email is not available
      </span>
    </PopupWithForm>
  );
}
