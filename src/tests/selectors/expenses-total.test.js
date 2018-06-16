import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = 0;
  const result = selectExpensesTotal([]);
  expect(result).toEqual(total);
});

test('should correctly add up single expense', () => {
  const total = 1500;
  const result = selectExpensesTotal([expenses[1]]);
  expect(result).toEqual(total);
});

test('should correctly add up multiple expense', () => {
  const total = 2800;
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(total);
});
