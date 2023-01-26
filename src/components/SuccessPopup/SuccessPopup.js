import { NavLink } from "react-router-dom";
import Popup from "../Popup/Popup";

 
export default function SuccessPopup({ isOpen }) {
    return (
        <Popup name="Registration successfully completed!" isOpen={isOpen}>
            <NavLink className='form__link'>Sign in</NavLink>
        </Popup>
    )
};