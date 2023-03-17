import React from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="container">
      <div className="card">
        <div className="card2">
          <form>
            <div className="inputbox">
              <input required="required" type="text" id="input1" />
              <span id="span1">Username</span>
              <i />
            </div>
            <div className="inputbox">
              <input required="required" type="text" id="input1" />
              <span id="span1">Email</span>
              <i />
            </div>
            <div className="inputbox">
              <input required="required" type="text" id="input1" />
              <span id="span1">CIN</span>
              <i />
            </div>
            <div className="inputbox">
              <input required="required" type="password" id="input1" />
              <span id="span1">Password</span>
              <i />
            </div>
            <div className="inputbox">
              <input required="required" type="password" id="input1" />
              <span id="span1">Confirm your Password</span>
              <i />
            </div>
            <div className="btn">
              <button class="full-rounded">
                <span>Sign up</span>
                <div class="border full-rounded"></div>
              </button>
            </div>
            <span className="signin">Already signed up?</span>
            {/* <Link to="/login">Login</Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
