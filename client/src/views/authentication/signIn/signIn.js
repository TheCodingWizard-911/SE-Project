import React from "react";
import DefaultButton from "../../../components/buttons/button";
import "./signIn.css";

const SignIn = () => {
  return (
    <div className="SignInFormContainer">
      <div className="SignInForm">
        <form>
          <h3 className="text-center">
            <strong>Log in to CO-convo-EP</strong>
          </h3>

          <div className="form-group">
            <label>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <p className="forgot-password text-right">
            <strong>Forgot password?</strong>
          </p>
          <div className="button">
            <DefaultButton text="Log In" />
          </div>
          <p className="text-left">
            Don't have an account? <strong> SignUp here</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
