import React from 'react';
import {Link} from'react-router-dom';

const ExpenseListItem = ({description,amount,createdAt,dispatch, id})=>(
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>

        <div>Amount:{amount}, Created At:{createdAt}</div>

    </div>
);


export default ExpenseListItem;