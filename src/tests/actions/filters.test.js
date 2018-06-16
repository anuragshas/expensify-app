import moment from 'moment';
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
} from '../../actions/filters';

test('should setup set text action event', () => {
  const text = 'test';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should setup set text action default object', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should setup set startDate action actionEvent', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should setup set endDate action actionEvent', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should setup set sortByDate action actionEvent', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should setup set sortByAmount action actionEvent', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});
