import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Password = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focused");
  }

  const handlePassword = (e) => {
    setShowPassword(!showPassword)
  }

  const handleBlur = (e) => {
    var inputValue = e.target.value;
    if (inputValue == "") {
      e.target.parentNode.classList.remove("focused")
    } else {
      e.target.parentNode.classList.add("focused");
    }
  }
  useEffect(() => {
    if (showPassword) {
      document.getElementById('current-pass').type = "text";
    } else {
      document.getElementById('current-pass').type = "password";
    }
  }, [showPassword])
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="change__password">
          <h2>Change Password</h2>
          <form>
            <div className="change__password__input input__animation  mb-23">
              <input onFocus={handleFocus} onBlur={handleBlur} type="password" id="current-pass" />
              <label htmlFor="current-pass">Current Password</label>
              <div onClick={handlePassword} id="password-visibility">
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div className="change__password__input input__animation mb-23">
              <input onFocus={handleFocus} onBlur={handleBlur} type="password" id="new-pass" />
              <label htmlFor="new-pass">New Password</label>
            </div>
            <div className="change__password__input input__animation">
              <input onFocus={handleFocus} onBlur={handleBlur} type="password" id="confirm-new-pass" />
              <label htmlFor="confirm-new-pass">Confirm New Password</label>
            </div>
            <div className="change__password__button">
              <button type="submit" className="btn btn-theme w-100">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Password
