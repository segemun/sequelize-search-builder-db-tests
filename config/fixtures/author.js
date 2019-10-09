const model = 'author';

const data = [
  {
    name: 'Richard',
    surname: 'Dawkins'
  },
  {
    name: 'Yuval Noah',
    surname: 'Harari'
  },
  {
    name: 'Chuck',
    surname: 'Palahniuk'
  }
];

const fixtures = data.map( row => {
  return {
    model: model,
    data: row
  }
});

module.exports = fixtures;