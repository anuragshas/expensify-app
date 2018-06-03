import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from "../../actions/filters";

test("should setup set text action event",()=>{
    const action = setTextFilter('test');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "test"
    })
});

test("should setup set text action default object",()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});

test("should setup set startDate action actionEvent",()=>{
    const action = setStartDate(1000);
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:1000
    })
});

test("should setup set endDate action actionEvent",()=>{
    const action = setEndDate(100);
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:100
    })
});

test("should setup set sortByDate action actionEvent",()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE",
    })
});

test("should setup set sortByAmount action actionEvent",()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT",
    })
});