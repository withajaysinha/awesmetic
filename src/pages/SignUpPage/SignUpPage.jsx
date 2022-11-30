import React from "react";
import "./SignUpPage.css";
import { loginPageAssets } from "../../assets/loginPageAssets/index";
function SignUpPage() {
  return (
    <>
      <div className="container border mt-5 p-5 sign_up_page w-50">
        <h6>ABOUT YOU</h6>
        {/* sign up with  */}
        <form action="#">
          <div className="border-bottom py-4">
            <p>Sign Up With</p>
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
          </div>
          <p className="py-2">Or create an email account</p>
          <div className="mb-2 full_name ">
            <label className="mb-1">*Full Name</label>
            <div className="input_email">
              <input type={"text"} className="w-100 p-1" required />
            </div>
          </div>
          <div className="mb-2 email_address">
            <label className="mb-1">*Email address</label>
            <div className="input_email">
              <input type={"email"} className="w-100 p-1" required />
            </div>
          </div>
          <div className="mobile_number">
            <lable>Mobile Number</lable>
            <div className="row">
              <div className="col-4 input_email">
                <input type="text" placeholder="IN +91" className="w-100 p-1" />
              </div>
              <div className="col-8 input_email">
                <input type="text" className="w-100 p-1" />
              </div>
            </div>
          </div>
          <div className="mb-2 password">
            <label className="mb-1">*Password</label>
            <div className="input_email">
              <input type={"password"} className="w-100 p-1" required />
            </div>
            <p>
              Include a minimum of 8 characters,contains at least one uppercase
              letter,one lowercase letter and one number
            </p>
          </div>
          <div className="mb-2 password">
            <label className="mb-1">*Confirm Password</label>
            <div className="input_email">
              <input type={"password"} className="w-100 p-1" required />
            </div>
          </div>
          <div className="mb-2 referral_code">
            <label className="mb-1">Referral Code</label>
            <div className="input_email">
              <input type={"text"} className="w-100 p-1" />
            </div>
            <p>* Your refferral discount is automatically applied at basket</p>
          </div>
          <div>
            <button className="btn btn-dark w-100">CONTINUE</button>
          </div>
          <p>
            By proceeding,you are confirming that you agree to our{" "}
            <a href="#">Terms and Conditions</a> and{" "}
            <a href="">Privacy Policy</a>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
