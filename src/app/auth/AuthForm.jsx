import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    };
  }

  /**
   * When react component is mounted
   * @returns {void}
   */
  componentDidMount() {
    this.openForm('signUpTabForm');
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

  onSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { article, createCommentAction } = this.props;
      const { body } = this.state;

      this.setState({
        errors: {},
        body: '',
      });

      const newComment = {
        slug: article.slug,
        body,
      };

      createCommentAction(newComment);
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
    document.getElementById('fullName').style.borderColor = '#ddd9d5';
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

  isValid = () => {
    const { errors, isValid } = CommentValidation.commentValidate(this.state);
    if (!isValid) {
      this.setState({
        errors,
        error: errors.body[0],
      });
    }
    return isValid;
  }

  /**
   * @memberof AuthForm
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const { error, body, errors } = this.state;

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
          <div className="container">
            <h2 className="float-left">Sign In</h2>
            <form id="loginForm" className="center" method="POST">
              <div className="row">
                <div className="row">
                  <div className="input col col-1">
                    <i className="material-icons">email</i>
                    <input id="0email" name="email" type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <i className="material-icons">account_circle</i>
                    <input id="0account_password" name="password" type="password" placeholder="Password" required />
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <p id="" className="hide-div"></p>
                    <button className="btn-signin">Sign In</button>
                  </div>
                </div>
              </div>
            </form>
            <br />
          </div>
        </div>
        <div id="signUpTabForm" className="tabcontent">
          <div className="container">
            <h2 className="float-left">Sign Up</h2>
            <form id="signUpForm" className="center" method="POST">
              <div className="row">
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">account_box</i>
                      <input className="signup-input-height" id="fullName" name="fullName" type="text" placeholder="Full Name" required />
                      <label id="fullNameLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">email</i>
                      <input className="signup-input-height" id="email" name="email" type="email" placeholder="Email" required />
                      <label id="emailLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">account_circle</i>
                      <input className="signup-input-height" id="password" name="password" type="password" placeholder="Password" required />
                      <label id="passwordLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <div className="row">
                      <i className="material-icons prefix">account_circle</i>
                      <input className="signup-input-height" id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" required />
                      <label id="confirmPasswordLabel"></label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input col col-1">
                    <button className="btn-signup">Sign Up</button>
                  </div>
                </div>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = {

};

const mapStateToProps = state => ({

});

const matchDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AuthForm);
