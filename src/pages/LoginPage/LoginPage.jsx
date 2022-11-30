import React from "react";
import { loginPageAssets } from "../../assets/loginPageAssets";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
const LoginUser = () => {
  return (
    <>
      <div className="login_user_container row">
        <div className="col-12 col-sm-6 col-md-6">
          <div className="p-4 login_container mb-3 md-p-1">
            <h6 className="mb-4">EXISTING COUSTOMER</h6>
            <form>
              <div className="mb-2">
                <label className="mb-1">*Email or mobile phone number</label>
                <div className="input_email">
                  <input type={"email"} className="w-100 p-1" required />
                </div>
              </div>
              <div className="mb-2">
                <label className="mb-1">*password</label>
                <div className=" input_email">
                  <input type={"password"} className="w-100 p-1" required />
                </div>
              </div>
              <div className="forget_password mb-2">
                <a href="#">FORGOTTEN YOUR PASSWORD?</a>
              </div>
              <button className="btn btn-dark w-100 mb-2">
                LOGIN TO YOUR ACCOUNT
              </button>
              <p className="my-3">Or,Continue with</p>
              <div className="row m-0">
                <div className="col-6 pl-0">
                  <button className="btn border w-100 btn-light d-inline-flex justify-content-center login_with_facebook">
                    <div className="login_icons">
                      <img src={loginPageAssets.facebookIcon} alt="" />
                    </div>
                    Facebook
                  </button>
                </div>
                <div className="col-6 pr-0">
                  <button className="btn border w-100 btn-light d-inline-flex justify-content-center login_with_google">
                    <div className="login_icons">
                      <img src={loginPageAssets.googleIcon} alt="" />
                    </div>
                    Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="new_customer col-12 col-sm-6 col-md-6 md-p-1">
          <div className="p-4 login_container">
            <p>New Customers</p>
            <NavLink to="/signup-page">
              <button className="btn btn-dark w-100">REGISTER</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
