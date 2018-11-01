import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signoutUser from '../actions/signout.actions';
import maintenanceLogo from '../../images/maintenance.png';

/**
 * @class CommentList
 * @extends {Component}
 *
 * @description Displays the list of comments
 *
 */
export class CommentList extends Component {
  /**
   * @memberof CommentList
   *
   * @returns {JSX} JSX representation of component
   *
   * @description Render the JSX template
   */

  handleSignOut = (event) => {
    event.preventDefault();
    const { signoutUserAction } = this.props;
    signoutUserAction();
  }

  render() {
    return (
      <div className="row">
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a className="dashboard-logo" href="/">
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
                  <a href="/admin.html">Home</a>
                </li>
                <li>
                  <a href="#!">Account</a>
                  <ul className="nav-dropdown">
                    <li>
                      <a href="/dashboard">My Requests</a>
                    </li>
                    <li>
                      <a href="#">My Account</a>
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
    );
  }
}

CommentList.propTypes = {
  signoutUserAction: PropTypes.func.isRequired,
  username: PropTypes.string,
  article: PropTypes.shape({}),
  commentsArray: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  article: state.articleReducer.article,
  error: state.auth.error,
  auth: state.auth.isAuthenticated,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  signoutUserAction: signoutUser,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(CommentList);
