import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import {
  addExpense,
  startAddExpense,
  editExpense,
  removeExpense,
} from '../../actions/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  // collecting fixture expenses
  expenses.forEach(({
    id, description, amount, note, createdAt,
  }) => {
    expensesData[id] = {
      description, amount, note, createdAt,
    };
  });
  // implement fixture expenses in Firebase.
  database
    .ref('expenses')
    .set(expensesData)
    .then(() => done());
});

test('should setup remove expense action event', () => {
  const action = removeExpense({ id: '124asd' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '124asd',
  });
});

test('should setup edit expense action event', () => {
  const action = editExpense('124asd', { createdAt: 100 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '124asd',
    updates: {
      createdAt: 100,
    },
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('Add expense to database and store', (done) => {
  // mock store based on library
  const store = createMockStore({});

  // create fake data based on input
  const expensesData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createAt: 1000,
  };

  store
    .dispatch(startAddExpense(expensesData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expensesData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expensesData);
      done();
    });
});

test('Add expense with default to database and store', (done) => {
  const store = createMockStore({});

  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createAt: 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});
