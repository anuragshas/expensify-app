import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      {expenseCount !== 0 && (
        <h1>
          Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}{' '}
        </h1>
      )}
    </div>
  );
};

ExpensesSummary.propTypes = {
  expenseCount: PropTypes.number,
  expensesTotal: PropTypes.number,
};

ExpensesSummary.defaultProps = {
  expenseCount: 0,
  expensesTotal: 0,
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
