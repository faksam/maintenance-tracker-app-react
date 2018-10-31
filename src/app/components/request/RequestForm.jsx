import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createRequest } from '../../actions/request.actions';

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
      closeModal: true,
      title: '',
      description: '',
      errors: {},
    };
  }

  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value, errors: newErrors
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { createRequestAction, hideModalRequest } = this.props;
    const { title, description } = this.state;

    this.setState({
      errors: {},
      description: '',
      title: '',
    });

    hideModalRequest();

    const newRequest = {
      title, description
    };
    createRequestAction(newRequest);
  }

  handleCloseError = () => {
    this.setState({
      errors: {},
      description: '',
      title: '',
    });
  };

  /**
   * @memberof RequestForm
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */
  render() {
    const { title, description, closeModal } = this.state;
    const { request, showRequestForm, hideModalRequest } = this.props;

    const showHideClassName = showRequestForm && closeModal ? 'display-block-modal' : 'modal';

    return (
      <div id="createRequestModal" className={showHideClassName}>
        <div className="modal-content">
          <div className="modal-header">
            <span
              id="createRequestSpan"
              onClick={hideModalRequest}
              className="close"
            >&times;
            </span>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="container center">
                <div className="row">
                  <h2 className="float-left">Create A New Request</h2>
                </div>
                <form className=" center" id="createRequestForm" method="POST">
                  <div className="row">
                    <div className="row">
                      <div className="input col col-1">
                        <input
                          id="requestTitle"
                          name="title"
                          type="text"
                          onChange={this.onChange}
                          value={title}
                          placeholder="Request Title"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input col col-1">
                        <textarea name="description"
                          rows="5"
                          cols="50"
                          id="requestDescription"
                          onChange={this.onChange}
                          value={description}
                          placeholder="Request Description"
                          className="desc-txt-area"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    type="button"
                    id="createUserRequestButton"
                    onClick={this.onSubmit}
                    className="btn-create-request"
                  >
                    Create
                  </button>
                </form>
                <br />
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

RequestForm.propTypes = {
  createRequestAction: PropTypes.func.isRequired,
  hideModalRequest: PropTypes.func,
  showRequestForm: PropTypes.bool,
};

const matchDispatchToProps = dispatch => bindActionCreators({
  createRequestAction: createRequest,
}, dispatch);

export default connect(matchDispatchToProps)(RequestForm);
