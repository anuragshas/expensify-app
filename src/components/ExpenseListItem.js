import React from 'react';
const ExpenseListItem = ({description,amount,createdAt})=>(
    <div>
        <h3>{description}</h3>
        <div>Amount:{amount}, Created At:{createdAt}</div>
    </div>
);

export default ExpenseListItem;