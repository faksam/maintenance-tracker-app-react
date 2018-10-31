import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'is-empty';

import { loadRequests } from '../../actions/request.actions';
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
      <tr>
        </tr>
    );
  }
}

RequestForm.propTypes = {
  loadRequestsAction: PropTypes.func.isRequired,
  requests: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  loadRequestsAction: loadRequests,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RequestForm);
