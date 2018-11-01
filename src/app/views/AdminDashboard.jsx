import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadRequests } from '../actions/request.actions';
import signoutUser from '../actions/signout.actions';

import ViewRequest from '../components/request/ViewRequest';
import RequestRow from '../components/request/RequestRow';
import maintenanceLogo from '../../images/maintenance.png';

export class Dashboard extends Component {
  state = {
    request: {},
    showViewRequest: false,
  };


  componentDidMount = () => {
    const { loadRequestsAction } = this.props;
    const currentUser = {
      url: 'requests'
    };
    loadRequestsAction(currentUser);
  }

  viewClickedRequest = request => (e) => {
    e.preventDefault();
    this.setState({
      showViewRequest: true,
      request
    });
  }

  hideModalRequest = () => {
    this.setState({
      showViewRequest: false,
      request: {},
    });
  }

  handleSignOut = (event) => {
    event.preventDefault();
    const { signoutUserAction } = this.props;
    signoutUserAction();
  }

  render() {
    const {
      showViewRequest, request
    } = this.state;
    const {
      requests, user, history
    } = this.props;

    if (user.role !== 'Admin') {
      history.push('/');
    }
    return (
      <div>
        <div className="main-container">
          <div className="row">
            <section className="navigation">
              <div className="nav-container">
                <div className="brand">
                  <a className="dashboard-logo" href="./homepage.html">
                    <img src={maintenanceLogo} className="logo-font" alt="Logo" />
                    {' '}
&nbsp; M-T-A

                  </a>
                </div>
                <nav>
                  <div className="nav-mobile">
                    <a id="nav-toggle" href="#!">
                      <span />
                    </a>
                  </div>
                  <ul className="nav-list">
                    <li id="adminhomepage" className="hide-div">
                      <a href="./adminhomepage.html">Home</a>
                    </li>
                    <li>
                      <a href="#!">Account</a>
                      <ul className="nav-dropdown">
                        <li>
                          <a href="./homepage.html">My Requests</a>
                        </li>
                        <li>
                          <a href="./user_account.html">My Account</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a id="signoutButton" onClick={this.handleSignOut}>Sign Out</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </div>
          <div className="container">

            <br />
            <div className="row">
              <h2 className="center">All Requests</h2>
              <div className="row">
                <div className="col-m col-1-6-m">
                  <a>
                    <button type="button" id="createRequestButton">
                      <i className="material-icons">add</i>
                    </button>
                  </a>
                </div>
                <div className="col-m col-1-2-m">
                  <input id="filterRequestInput" placeholder="Search" />
                </div>
                <div className="col-m col-1-3-m">
                  <select id="filterByStatus">
                    <option value="All">All</option>
                    <option value="New">New</option>
                    <option value="Pending">Approved</option>
                    <option value="Disapproved">Disapproved</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>

              </div>
              {/* <DisplayRequests /> */}
              <table id="requestTable">
                <thead>
                  <tr className="header">
                    <th>Title</th>
                    <th colSpan="2">Description</th>
                    <th>Status</th>
                    <th colSpan="2">Date</th>
                    <th colSpan="2">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody id="requestTableBody">
                  {
        requests
          ? requests.map(requestItem => (
            <RequestRow
              key={requestItem.id}
              request={requestItem}
              viewClickedRequest={this.viewClickedRequest}
            />))
          : <tr>You have not made a request yet</tr>
    }
                </tbody>
              </table>
            </div>
            {' '}
            <br />
            <br />
          </div>
          {(showViewRequest && (
          <ViewRequest
            showViewRequest={showViewRequest}
            hideModalRequest={this.hideModalRequest}
            request={request}
          />))}


          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="pagination">
                <section id="paginationSection">
                  <h2>Jump to page:</h2>
                </section>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="row">
              <p>
                © 2018 Copyright M-T-A by
                <a target="_blank" href="http://www.fakunlesamuel.com">FakSam</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  signoutUserAction: PropTypes.func.isRequired,
  loadRequestsAction: PropTypes.func.isRequired,
  request: PropTypes.shape({}),
  requests: PropTypes.instanceOf(Array),
  history: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
  user: state.auth.user,
  requests: state.requestReducer.requests,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  loadRequestsAction: loadRequests,
  signoutUserAction: signoutUser,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
