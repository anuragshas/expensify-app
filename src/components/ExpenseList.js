import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No expenses</span>
        </div>
      ) : (
        expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
      )}
    </div>
  </div>
);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

ExpenseList.defaultProps = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
