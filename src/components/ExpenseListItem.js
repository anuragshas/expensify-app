import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from "../actions/expenses";

const ExpenseListItem = ({description,amount,createdAt,dispatch, id})=>(
    <div>
        <h3>{description}</h3>
        <div>Amount:{amount}, Created At:{createdAt}</div>
        <button onClick={()=>{
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expense: state.expense
    }
};

export default connect(mapStateToProps)(ExpenseListItem);