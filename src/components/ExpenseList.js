import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div>
    {expenses.length === 0 ? (
      <p>No Expenses</p>
    ) : (
      expenses.map((expense, index) => <ExpenseListItem key={index} {...expense} />)
    )}
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
