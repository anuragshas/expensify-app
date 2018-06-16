import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <div>
      Amount:{numeral(amount / 100).format('$0,0.00')}
      - Created At:{moment(createdAt).format('MMMM Do, YYYY')}
    </div>
  </div>
);

ExpenseListItem.propTypes = {
  description: PropTypes.string,
  amount: PropTypes.number,
  createdAt: PropTypes.number,
  id: PropTypes.string,
};

ExpenseListItem.defaultProps = {
  description: null,
  amount: null,
  createdAt: null,
  id: null,
};

export default ExpenseListItem;
