import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'is-empty';

import { createRequest } from '../../actions/request.actions';
// import RequestValidation from '../../validations/validateRequest';
// import ErrorAlertNotification from '../common/ErrorAlertNotification';

/**
 * @class RequestForm
 *
 * @description Request Form Component
 * @extends {Component}
 *
 * @param {*} event
 */
export class RequestForm extends Component {
  /**
   * @description - Class Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      article: {},
      body: '',
      errors: {},
      success: {},
      done: false,
      isLoading: false,
      error: '',
    };
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
      const { article, createRequestAction } = this.props;
      const { body } = this.state;

      this.setState({
        errors: {},
        body: '',
      });

      const newRequest = {
        slug: article.slug,
        body,
      };

      createRequestAction(newRequest);
    }
  }

  handleCloseError = () => {
    this.setState({
      error: '',
      errors: {}
    });
  };

  isValid = () => {
    const { errors, isValid } = RequestValidation.requestValidate(this.state);
    if (!isValid) {
      this.setState({
        errors,
        error: errors.body[0],
      });
    }
    return isValid;
  }

  /**
   * @memberof RequestForm
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const { error, body, errors } = this.state;

    return (
      <div id="createRequestModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span id="createRequestSpan" className="close">&times;</span>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="container center">
                <div className="row">
                  <h2 className="float-left">Create A New Request</h2>
                </div>
                <div className="row">
                  <div id="errorDiv">
                    <p id="createErrorMessage" className="hide-div"></p>
                  </div>
                </div>
                <form className=" center" id="createRequestForm" method="POST">
                  <div className="row">
                    <div className="row">
                      <div className="input col col-1">
                        <input id="requestTitle" name="title" type="text" placeholder="Request Title" required />
                        <label id="titleLabel"></label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input col col-1">
                        <textarea name="description" rows="5" cols="50" id="requestDescription" placeholder="Request Description" className="desc-txt-area"
                          required></textarea>
                        <label id="descriptionLabel"></label>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button id="createUserRequestButton" className="btn-create-request">Create</button>
                </form>
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="modal-footer">
          </div>
        </div>
      </div>
    );
  }
}

RequestForm.propTypes = {
  createRequestAction: PropTypes.func.isRequired,
  article: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  createRequestAction: createRequest,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RequestForm);
