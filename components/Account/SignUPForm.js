import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUPForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focused");
  }
  const handlePassword = (e) => {
    setShowPassword(!showPassword)
  }
  const handleBlur = (e) => {
    var inputValue = e.target.value;
    if (inputValue == "") {
      e.target.parentNode.classList.remove("focused");
    } else {
      e.target.parentNode.classList.add("focused");
    }
  }
  useEffect(() => {
    if (showPassword) {
      document.getElementById('password').type = "text";
    } else {
      document.getElementById('password').type = "password";
    }
  }, [showPassword])
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="account__content">
        <div className="account__content__body">
          <div className="account__content__top">
            <h2>Create an account</h2>
            <p>
              Already have an account?
              <Link href="/sign-in">
                <a className="input-link" > Sign in</a>
              </Link>
            </p>
          </div>
          <div className="account__form">
            <form>
              <div className="account__input input__animation mb-24">
                <input onFocus={handleFocus} onBlur={handleBlur} type="email" id="email" placeholder="Email address" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="account__input__between mb-24">
                <div className="account__input input__animation">
                  <input onFocus={handleFocus} onBlur={handleBlur} type="text" id="f-name" placeholder="" />
                  <label htmlFor="f-name">First Name</label>
                </div>
                <div className="account__input input__animation">
                  <input onFocus={handleFocus} onBlur={handleBlur} type="text" id="l-name" placeholder="" />
                  <label htmlFor="l-name">Last Name</label>
                </div>
              </div>
              <div className="account__input input__animation mb-24">
                <input onFocus={handleFocus} onBlur={handleBlur} type="password" id="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
                <div onClick={handlePassword} id="password-visibility">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <div className="account__input mb-24">
                <button className="btn btn-theme w-100" type="submit">Sign Up</button>
              </div>
              <div className="account__input__terms">
                <input type="checkbox" id="terms" name="terms" />
                <label>
                  By clicking Create account, I agree that I have read and accepted the
                  <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUPForm;
