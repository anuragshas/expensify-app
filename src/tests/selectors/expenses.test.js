import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

const expenses = [{
        id:'1',
        description: 'Gun',
        note:'',
        amount:500,
        createdAt:0
    },{
        id:'2',
        description: 'Rifle',
        note:'',
        amount:1500,
        createdAt:moment(0).subtract(4,'days').valueOf()
    },{
        id:'3',
        description: 'Pistol',
        note:'',
        amount:800,
        createdAt:moment(0).add(4,'days').valueOf()
    }
];


test('should filter by text value',()=>{
    const filters={
        text: 'i',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[1]]);
});

test('should filter by startDate value',()=>{
    const filters={
        text: '',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test('should filter by endDate value',()=>{
    const filters={
        text: '',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should filter by sortByDate value',()=>{
    const filters={
        text: '',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});

test('should filter by sortByAmount value',()=>{
    const filters={
        text: '',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpenses(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});