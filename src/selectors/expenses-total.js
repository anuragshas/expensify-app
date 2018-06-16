export default expenses => {
  if (!expenses) {
    return 0;
  }
  return expenses.map(expense => expense.amount).reduce((total, value) => total + value, 0);
};
