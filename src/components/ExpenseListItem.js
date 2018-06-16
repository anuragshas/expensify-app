import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({
  description, amount, createdAt, id,
}) => (
  <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>

    <div>
            Amount:{numeral(amount / 100).format('$0,0.00')}
            -
            Created At:{moment(createdAt).format('MMMM Do, YYYY')}
    </div>

  </div>
);


export default ExpenseListItem;
