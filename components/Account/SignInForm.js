import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focused");
  }

  const handleBlur = (e) => {
    var inputValue = e.target.value;
    if (inputValue == "") {
      e.target.parentNode.classList.remove("focused");
    } else {
      e.target.parentNode.classList.add("focused");
    }
  }
  const handlePassword = (e) => {
    setShowPassword(!showPassword)
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
            <h2>Sign In</h2>
            <p>
              New user?
              <Link href="/sign-up">
                <a className="input-link"> Create an account</a>
              </Link>
            </p>
          </div>
          <div className="account__form">
            <form>
              <div className="account__input input__animation mb-24">
                <input onFocus={handleFocus} onBlur={handleBlur} type="email" id="email" />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="account__input input__animation mb-24">
                <input onFocus={handleFocus} onBlur={handleBlur} type="password" id="password" />
                <label htmlFor="password">Password</label>
                <div onClick={handlePassword} id="password-visibility">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              <div className="account__input__between">
                <div className="account__input">
                  <a className="input-link" href="#">Forget Password?</a>
                </div>
                <div className="account__input">
                  <button className="btn btn-theme w-100" type="submit">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm;
