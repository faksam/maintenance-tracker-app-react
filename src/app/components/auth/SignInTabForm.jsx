import React from 'react';

import PropTypes from 'prop-types';

/**
 * @class SignInTabForm
 * @extends {Component}
 *
 * @description Displays the list of replies to a comment
 *
 */
const SignInTabForm = ({
  handleSignIn, accountEmail, accountPassword, handleChange,
  errorDivClass, errors
}) => (
  <div>
    <div className="container">
      <h2 className="float-left">Sign In</h2>
      <form id="loginForm" className="center" method="POST">
        <div className="row">
          <div className="row">
            <div className="input col col-1">
              <i className="material-icons">email</i>
              &nbsp;
              <input
                id="accountEmail"
                name="accountEmail"
                type="email"
                placeholder="Email"
                value={accountEmail}
                onChange={handleChange}
                required
              />
              <div id="errorDiv" className={errorDivClass}>
                {
                  errors.email
                    ? (<p key="email" className="danger">{errors.email}</p>)
                    : ''
                }
                <p id="signupErrorMessage" className="hide-div" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input col col-1">
              <i className="material-icons">account_circle</i>
              &nbsp;
              <input
                id="accountPassword"
                name="accountPassword"
                type="password"
                placeholder="Password"
                value={accountPassword}
                onChange={handleChange}
                required
              />
              <div id="errorDiv" className={errorDivClass}>
                {
                  errors.password
                    ? (<p key="password" className="danger">{errors.password}</p>)
                    : ''
                }
                <p id="signupErrorMessage" className="hide-div" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input col col-1">
              <button className="btn-signin"
                onClick={handleSignIn}
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
    </div>
  </div>
);

SignInTabForm.propTypes = {
  errorDivClass: PropTypes.string,
  errors: PropTypes.instanceOf(Object),
  handleSignIn: PropTypes.func.isRequired,
  accountEmail: PropTypes.string.isRequired,
  accountPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SignInTabForm;
