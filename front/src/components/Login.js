import React, { useState } from 'react';
import '../styles/Login.css';
function Login() {
  const [Login, setLogin] = useState({});

  return (
    <div className="container">
      <div className="card">
        <div className="card2">
          <form>
            <div className="inputbox" style={{ marginTop: '100px' }}>
              <input required="required" type="text" id="input1" />
              <span id="span1">Email</span>
              <i />
            </div>
            <div className="inputbox">
              <input required="required" type="password" id="input1" />
              <span id="span1">Password</span>
              <i />
            </div>
            <div className="btn">
              <button class="full-rounded" id="signinbtn">
                <span>Sign in</span>
                <div class="border full-rounded"></div>
              </button>
            </div>
            <span className="signin">Dont't have an account?</span>
            {/* <Link to="/login">Login</Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
