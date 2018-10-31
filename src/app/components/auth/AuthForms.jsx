import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      error: '',
      errors: {},
      email: '',
      password: '',
      fullname: '',
      confirmPassword: '',
      accountEmail: '',
      accountPassword: '',
    };
  }

  /**
   * When react component is mounted
   * @returns {void}
   */
  componentDidMount() {
    this.openForm('signUpTabForm');
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

  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.id]) {
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

  onSubmit = (event) => {
    event.preventDefault();
  }

  isValid = (userInput) => {
    const { errors, isValid } = UserInputValidation.signInInputValidation(userInput);

    if (!isValid) {
      this.setState({ errors, password: '' });
    }

    return isValid;
  };

  handleSignIn = (event) => {
    event.preventDefault();
    const { accountEmail, accountPassword } = this.state;
    const userInput = {
      email: accountEmail,
      password: accountPassword
    }
    const { errors, isValid } = UserInputValidation.signInInputValidation(userInput);

    if (isValid) {
      this.props.signInUser(userInput);
    }

  }

  handleSignUp = (event) => {
    event.preventDefault();
    const { fullname, email, password, confirmPassword } = this.state;
    const userInput = {
      fullname,
      email,
      password,
      password_confirmation: confirmPassword
    }
    const { errors, isValid } = UserInputValidation.signUpInputValidation(userInput);
    const validatedInput = {
      fullName: fullname,
      email,
      password,
      confirmPassword
    }
    if (isValid) {
      this.props.signUpUser(validatedInput);
    }
  }

  openForm = (formName) => {
    let i;
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i += 1) {
      tabcontent[i].style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i += 1) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(formName).style.display = 'block';
    if (formName === 'signInTabForm') {
      signInTab.className += ' active';
    } else {
      signUpTab.className += ' active';
    }
    // evt.currentTarget.className += " active";
    this.clearErrorText();
    this.clearErrorLoginText();
  };

  /**
   * @description - Helps to clear all label and error texts recieved from API
   *
   */
  clearErrorLoginText = () => {
    document.getElementById('loginErrorMessage').innerHTML = '';
    document.getElementById('loginErrorDiv').style.display = 'none';
  };

  /**
   * @description - Helps to clear all label and error texts recieved from API
   *
   */
  clearErrorText = () => {
    document.getElementById('passwordLabel').innerHTML = '';
    document.getElementById('emailLabel').innerHTML = '';
    document.getElementById('fullNameLabel').innerHTML = '';
    document.getElementById('confirmPasswordLabel').innerHTML = '';
    document.getElementById('signupErrorMessage').innerHTML = '';
    document.getElementById('errorDiv').style.display = 'none';

    document.getElementById('confirmPassword').style.borderColor = '#ddd9d5';
    document.getElementById('password').style.borderColor = '#ddd9d5';
    document.getElementById('email').style.borderColor = '#ddd9d5';
    document.getElementById('fullname').style.borderColor = '#ddd9d5';
    document.getElementById('signupErrorMessage').style.borderColor = '#ddd9d5';
  };

  handleCloseError = () => {
    this.setState({
      error: '',
      errors: {}
    });
  };

  displayForm = (event) => {
      event.preventDefault();
      const form = `${event.target.id}Form`;
      this.openForm(form);
  }

  /**
   * @memberof AuthForm
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const {
      error,
      body,
      errors,
      email,
      password,
      fullname,
      confirmPassword,
      accountPassword,
      accountEmail
    } = this.state;

    return (
      <div className="row">
        <div className="tab col col-1">
          <button id="signUpTab" onClick={this.displayForm} className="tablinks sign-tab">Sign Up</button>
          <button id="signInTab" onClick={this.displayForm} className="tablinks sign-tab">Sign In</button>
        </div>
        <div id="loginErrorDiv">
          <p id="loginErrorMessage" className="hide-div"></p>
        </div>
        <div id="errorDiv">
          <p id="signupErrorMessage" className="hide-div"></p>
        </div>
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
  auth: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user
});

const matchDispatchToProps = dispatch => bindActionCreators({
  signInUser: signInAction,
  signUpUser: signUpAction
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AuthForm);
