import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("should setup default state",()=>{
    const state = expensesReducers(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});

test("should remove expense by id",()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expense if id not found",()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});

test("should add expense",()=>{
    const expense =  {
        id:'4',
        description: 'AirGun',
        note:'',
        amount:900,
        createdAt:2000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test("should edit expense by id",()=>{
    const updates ={
        description: 'NewRifle'
    };
    const updatedExpense = {
            ...expenses[1],
            ...updates
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[0],updatedExpense,expenses[2]]);
});

test("should not edit expense if id not found",()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses);
});