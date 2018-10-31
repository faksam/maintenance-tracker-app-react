import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

const RequestRow = ({ request, showViewRequest, viewClickedRequest }) => {
  


  return (
  <tr id={request.id} onClick={viewClickedRequest(request)}>
    <td>{request.title}</td>
    <td colSpan="2">{request.description}</td>
    <td>{request.status}</td>
    <td colSpan="2">{moment(request.date).fromNow()}</td>
    {
          request.status === 'New' ? 
          <td>
            <table>
              <tbody>
                <tr>
                  <td><button id={request.id}><i className="material-icons">edit</i></button></td>
                  <td><button className="danger" id={request.id}><i className="material-icons">delete</i></button></td>
                </tr>
              </tbody>
            </table>
          </td>
          : ''
    }
  </tr>
)};
RequestRow.propTypes = {
  request: PropTypes.shape({}).isRequired,
};
export default RequestRow;
