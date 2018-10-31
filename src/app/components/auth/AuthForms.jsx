import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'is-empty';

import SignInTabForm from './SignInTabForm';
import SignUpTabForm from './SignUpTabForm';

import signInAction from '../../actions/signin.actions';
import signUpAction from '../../actions/signup.actions';
import UserInputValidation from '../../validator/authValidation';

/**
 * @class AuthForm
 *
 * @description Comment Form Component
 * @extends {Component}
 *
 * @param {*} event
 *
 * @param {*} formName
 * @param {*} userInput
 */
export class AuthForm extends Component {
  /**
   * @description - Class Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      email: '',
      password: '',
      fullname: '',
      confirmPassword: '',
      accountEmail: '',
      accountPassword: '',
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { auth, history, user } = nextProps;
    if (auth && user.role === 'User') {
      history.push('/dashboard');
      return null;
    } else if (auth && user.role === 'Admin') {
      history.push('/admin');
    }
    return null;
  }

  handleChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.id];
      this.setState({
        [event.target.id]: event.target.value, errors: newErrors
      });
    } else {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
  }

  handleSignIn = (event) => {
    event.preventDefault();
    const { accountEmail, accountPassword } = this.state;
    const { signInUser } = this.props;
    const userInput = {
      email: accountEmail,
      password: accountPassword
    };
    const { errors, isValid } = UserInputValidation.signInInputValidation(userInput);

    if (isValid) {
      signInUser(userInput);
    }
  }

  handleSignUp = (event) => {
    event.preventDefault();
    const {
      fullname, email, password, confirmPassword
    } = this.state;
    const { signUpUser } = this.props;
    const userInput = {
      fullname,
      email,
      password,
      password_confirmation: confirmPassword
    };
    const { errors, isValid } = UserInputValidation.signUpInputValidation(userInput);
    const validatedInput = {
      fullName: fullname,
      email,
      password,
      confirmPassword
    };
    if (isValid) {
      signUpUser(validatedInput);
    }
  }

  handleCloseError = () => {
    this.setState({
      errors: {}
    });
  };

  /**
   * @memberof AuthForm
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const {
      email,
      password,
      fullname,
      confirmPassword,
      accountPassword,
      accountEmail
    } = this.state;

    const {
      error,
    } = this.props;
    return (
      <div className="row">
        <div className="tab col col-1">
          <button
            id="signUpTab"
            type="button"
            onClick={this.displayForm}
            className="tablinks
            sign-tab"
          >
            Sign Up
          </button>
          <button
            id="signInTab"
            type="button"
            onClick={this.displayForm}
            className="tablinks sign-tab"
          >
            Sign In
          </button>
        </div>
        <div id="loginErrorDiv">
          <p id="loginErrorMessage" className="hide-div" />
        </div>
        <div id="errorDiv">
          <p id="signupErrorMessage" className="hide-div" />
        </div>
        {
          !isEmpty(error) && (<p className="danger">{error.message}</p>)
        }
        <div id="signInTabForm" className="tabcontent center">
          <SignInTabForm
            handleChange={this.handleChange}
            handleSignIn={this.handleSignIn}
            accountEmail={accountEmail}
            accountPassword={accountPassword}
          />
        </div>
        <div id="signUpTabForm" className="tabcontent">
          <SignUpTabForm
            handleChange={this.handleChange}
            handleSignUp={this.handleSignUp}
            fullname={fullname}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
          />
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = {
  error: PropTypes.instanceOf(Object),
  signInUser: PropTypes.func,
  signUpUser: PropTypes.func,
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user,
  error: state.auth.error
});

const matchDispatchToProps = dispatch => bindActionCreators({
  signInUser: signInAction,
  signUpUser: signUpAction
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AuthForm);
