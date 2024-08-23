import { useState } from "react";
import "./logingPopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ SetshowLogin }) => {
  const [currState, setCurrState] = useState("signUp");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2> {currState}</h2>
          <img
            onClick={() => SetshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Pasword" required />
        </div>
        <button>{currState === "SignUp" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms & conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ? <span onClick={()=> setCurrState('SignUp')}>Click here </span>
          </p>
        ) : (
          <p>
            Already have an account ? <span onClick={()=> setCurrState('Login')}>Login here </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
