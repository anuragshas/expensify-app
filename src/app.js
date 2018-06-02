import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from'./selectors/expenses';
import {addExpense} from "./actions/expenses";
import {setTextFilter, sortByAmount} from "./actions/filters";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    // console.log(visibleExpenses);
});

const expense_one = store.dispatch(addExpense({description:'Water bill',amount:100, createdAt:1200}));
const expense_two = store.dispatch(addExpense({description:'Coffee bill',amount:5, createdAt:400}));
store.dispatch(sortByAmount());

const jsx = (
    <Provider store ={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx,document.getElementById('app'));