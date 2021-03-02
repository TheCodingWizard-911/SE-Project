import React from "react";
import DefaultButton from "../../../components/buttons/button";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="SignUpFormContainer">
      <div className="SignUpForm">
        <form>
          <h3 className="text-center">
            <strong>Sign Up for CO-convo-EP</strong>
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

          <div className="form-group">
            <label>
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-Enter password"
            />
          </div>

          <div className="button">
            <DefaultButton text="Sign Up" />
          </div>
          <p className="text-left">
            Already have an account? <strong> LogIn here</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
