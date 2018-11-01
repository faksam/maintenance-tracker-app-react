import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

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
                <div className="col col-1">
                  <div className="row overflow">
                    <h2 className="center">
                      <b>Request</b>
                    </h2>
                    <hr className="style14" />
                    <h2>
                      <b>Title: </b>
                    </h2>
                    <h3 id="viewRequestTitle">{request.title}</h3>
                    <h2>
                      <b>Description:</b>
                    </h2>
                    <h3 id="viewRequestDescription">{request.description}</h3>
                    <h2>
                      <b>Date:</b>
                    </h2>
                    <h3 id="viewRequestDate">{moment(request.date).format('MMM D, YYYY')}</h3>
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
