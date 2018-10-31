import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'is-empty';

import { loadRequests, createRequest } from '../actions/request.actions';

import ViewRequest from '../components/request/ViewRequest';
import DisplayRequests from '../components/request/DisplayRequests';
import RequestRow from '../components/request/RequestRow';
import RequestForm from '../components/request/RequestForm';
import maintenanceLogo from '../../images/maintenance.png';

export class Dashboard extends Component {
    state = {
        dated: '',
        status: '',
        category: '',
        isLoading: true,
        filterMessage: '',
        noRequestMessage: '',
        request: {},
        showViewRequest: false,
        showRequestForm: false,
    };


  componentDidMount = () => {
    const { loadRequestsAction, user } = this.props;
    let currentUser = {
      url: 'users/requests'
    };
    if (user.role === 'Admin') {
        user.url = 'requests';
      }
    loadRequestsAction(currentUser);
  }
  viewClickedRequest = request => e => {
    this.setState({
        showViewRequest: true,
        request
    });
  }

  hideModalRequest = e => {
    e.preventDefault();
    this.setState({
        showViewRequest: false,
        request: {},
    });
  }
  handleCreateRequest = event => {
      event.preventDefault();
      this.setState({
        showRequestForm: true,
        request: {},
    });
  }
    render() {
        const { showViewRequest, request, showRequestForm } = this.state;
        const { requests } = this.props;
        return (
            <div>
                <div className="main-container">
                    <div className="row">
                        <section className="navigation">
                            <div className="nav-container">
                                <div className="brand">
                                    <a className="dashboard-logo" href="./homepage.html">
                                        <img src={maintenanceLogo} className="logo-font" alt="Logo" /> &nbsp; M-T-A</a>
                                </div>
                                <nav>
                                    <div className="nav-mobile">
                                        <a id="nav-toggle" href="#!">
                                            <span></span>
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
                                            <a id="signoutButton" href="./index.html">Sign Out</a>
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
                                        <button id="createRequestButton" onClick={this.handleCreateRequest}>
                                            <i className="material-icons">add</i>
                                        </button>
                                    </a>
                                </div>
                                <div className="col-m col-1-2-m">
                                    <input id="filterRequestInput" id="filterRequestInput" placeholder="Search" />
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
                                        requests ?
                                        requests.map(request => <RequestRow key={request.id} request={request} viewClickedRequest={this.viewClickedRequest}/>) :
                                        <tr>You have not made a request yet</tr>
                                    }
                                </tbody>
                            </table>
                        </div>  <br />
                        <br />
                    </div>
                    {showViewRequest && <ViewRequest showViewRequest={showViewRequest} request={request} hideModalRequest={this.hideModalRequest} />}

                    {showRequestForm && <ViewRequest showRequestForm={showRequestForm} request={request} hideModalRequest={this.hideModalRequest} />}
                

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
            </div></div>
        )
    }
}

Dashboard.propTypes = {
    loadRequestsAction: PropTypes.func.isRequired,
    createRequestAction: PropTypes.func.isRequired,
    request: PropTypes.shape({}),
};

const mapStateToProps = state => ({
    error: state.auth.error,
    auth: state.auth.isAuthenticated,
    user: state.auth.user,
    requests: state.requestReducer.requests,
});

const matchDispatchToProps = dispatch => bindActionCreators({
    loadRequestsAction: loadRequests,
    createRequestAction: createRequest
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
