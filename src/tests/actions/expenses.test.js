import {addExpense, editExpense,removeExpense} from "../../actions/expenses";

test("should setup remove expense action event",()=>{
    const action = removeExpense({id:'124asd'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'124asd'
    })
});

test("should setup edit expense action event",()=>{
    const action = editExpense('124asd',{createdAt: 100});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'124asd',
        updates:{
            createdAt:100
        }
    })
});

test("should setup add expense action event",()=>{
    const expenseData = {
        description: 'Rent',
        amount: 10111,
        createdAt:1000,
        note: 'new bill'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});

test("should setup add expense action object default",()=>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description:"",
            note:"",
            amount:0,
            createdAt:0,
            id:expect.any(String)
        }
    })
});