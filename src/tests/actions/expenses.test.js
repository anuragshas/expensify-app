import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import {
  addExpense,
  startAddExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses,
} from '../../actions/expenses';

const createMockStore = configureMockStore([thunk]);
const uid = 'someuid123';

beforeEach(done => {
  const expensesData = {};
  // collecting fixture expenses
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expensesData[id] = {
      description,
      amount,
      note,
      createdAt,
    };
  });
  // implement fixture expenses in Firebase.
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

// REMOVE
test('should setup remove expense action event', () => {
  const action = removeExpense({ id: '124asd' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '124asd',
  });
});

test('Should remove expense data from firebase', done => {
  const store = createMockStore({ auth: { uid } });
  const { id } = expenses[2];
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

// EDIT
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

test('Should Edit expense data from firebase', done => {
  const store = createMockStore({ auth: { uid } });
  const { id } = expenses[0];
  const updates = { note: 'Edit Me' };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val().note).toBe(updates.note);
      done();
    });
});

// ADD Expense
test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('Add expense to database and store', done => {
  // mock store based on library
  const store = createMockStore({ auth: { uid } });

  // create fake data based on input
  const expensesData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000,
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expensesData);
      done();
    });
});

test('Add expense with default to database and store', done => {
  const store = createMockStore({ auth: { uid } });

  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0,
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

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// SET expense
test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch expenses from firebase', done => {
  const store = createMockStore({ auth: { uid } });
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });
    done();
  });
});
