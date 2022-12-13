import React from "react";
import "./LoginPage.css";
import GoogleIcon from "./google.svg";

const LoginPage = () => {
  return (
    <div className="LoginPageBody">
      <div className="LoginPageCard">
        <div className="signindiv">SIGN-IN</div>
        <div className="emailinput">
          <input type="text" id="Email-ID" required></input>
          <label for="Email-ID">email-id</label>
        </div>
        <button className="requestOTPbtn">REQUEST OTP</button>
        <div className="signUpOptionDiv">
          <div className="orsignupwith">
            <h2>or sign up with</h2>
            <div className="cardFooter">
              <div className="btn" type="button">
                <img src={GoogleIcon} />
                <span>
                  {" "}
                  <a href="#">Google </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
