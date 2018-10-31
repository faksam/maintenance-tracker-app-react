import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * @class ViewRequest
 *
 * @description View Request Component
 * @extends {Component}
 *
 * @param {*} event
 */
export class ViewRequest extends Component {
  /**
   * @description - Class Constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      errors: {},
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

  handleCloseError = () => {
    this.setState({
      error: '',
      errors: {}
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
    const { error, body, errors } = this.state;
    const { request, showViewRequest, hideModalRequest } = this.props;
    const showHideClassName = showViewRequest ? "display-block-modal" : "modal";

    return (
      <div id="viewRequestModal" className={showHideClassName}>
        <div className="modal-content">
          <div className="modal-header">
            <span id="viewRequestSpan" onClick={hideModalRequest} className="close">&times;</span>
          </div>
          <div className="modal-body">
            <div className="row left">
              <div className="container">
                <br />
                <div className="col col-1">
                  <div className="row">
                    <h2>
                      <b>Request title: </b>
                    </h2>
                    <h3 id="viewRequestTitle">
                      <b>{request.title}</b>
                    </h3>
                    <hr />
                    <h2>
                      <b>Request content:</b>
                    </h2>
                    <h3 id="viewRequestDescription">{request.description}</h3>
                    <h2>
                      <b>Request date:</b>
                    </h2>
                    <h3 id="viewRequestDate">{request.date}</h3>
                    <h2>
                      <b>Status:</b>
                    </h2>
                    <h3 id="viewRequestStatus">{request.status}</h3>
                  </div>

                </div>
                <br />
                <br />
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

ViewRequest.propTypes = {
  createRequestAction: PropTypes.func,
};

const mapStateToProps = state => ({
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(ViewRequest);
