import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * @class SignUpTabForm
 * @extends {Component}
 *
 * @description Displays the list of replies to a comment
 *
 */
const SignUpTabForm = ({
  handleSignUp, fullname, email, password, confirmPassword, handleChange
}) => (
      <div>
        <div className="container">
            <h2 className="float-left">Sign Up</h2>
            <form id="signUpForm" className="center" method="POST">
              <div className="row">
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">account_box</i>
                      <input
                        className="signup-input-height"
                        id="fullname" name="fullname"
                        type="text"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={handleChange}
                        required
                      />
                      <label id="fullNameLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">email</i>
                      <input
                        className="signup-input-height"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required />
                      <label id="emailLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        className="signup-input-height"
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Password"
                        value={password}
                        required
                      />
                      <label id="passwordLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">account_circle</i>
                      <input
                        className="signup-input-height"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        type="password"
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required />
                      <label id="confirmPasswordLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <button className="btn-signup" onClick={handleSignUp}>Sign Up</button>
                  </div>
                </div>
                <br />
              </div>
            </form>
          </div>
      </div>
    );

SignUpTabForm.propTypes = {
  handleSignUp: PropTypes.func.isRequired,
  fullname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SignUpTabForm;
