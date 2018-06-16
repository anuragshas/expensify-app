import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  editExpense: PropTypes.func,
  removeExpense: PropTypes.func,
  history: PropTypes.object,
  expense: PropTypes.object,
};

EditExpensePage.defaultProps = {
  editExpense: null,
  removeExpense: null,
  history: null,
  expense: null,
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
