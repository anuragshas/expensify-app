import moment from 'moment/moment';

export default [
  {
    id: '1',
    description: 'Gun',
    note: '',
    amount: 500,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rifle',
    note: '',
    amount: 1500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'Pistol',
    note: '',
    amount: 800,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];
