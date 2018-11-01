import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const RequestRow = ({ request, showViewRequest, viewClickedRequest }) => {
  return (
    <tr id={request.id} onClick={viewClickedRequest(request)}>
      <td>{request.title}</td>
      <td colSpan="2">{request.description}</td>
      <td>{request.status}</td>
      <td colSpan="3">{moment(request.date).fromNow()}</td>
      <td />
      <td />
    </tr>
  );
};
RequestRow.propTypes = {
  request: PropTypes.shape({}).isRequired,
};
export default RequestRow;
