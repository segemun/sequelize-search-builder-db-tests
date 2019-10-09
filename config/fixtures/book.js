const model = 'book';

const data = [
  {
    title: 'The Selfish Gene',
    publicationDate: 1996,
    authors: [{
      name: 'Richard',
      surname: 'Dawkins'
    }]
  },
  {
    title: 'Fight Club',
    publicationDate: 1996,
    authors: [{
      name: 'Chuck',
      surname: 'Palahniuk'
    }]
  },
  {
    title: 'The God Delusion',
    publicationDate: 2006,
    authors: [{
      name: 'Richard',
      surname: 'Dawkins'
    }]
  },
  {
    title: 'The Blind Watchmaker',
    publicationDate: 1986,
    authors: [{
      name: 'Richard',
      surname: 'Dawkins'
    }]
  },
  {
    title: 'Sapiens: A Brief History of Humankind',
    publicationDate: 2014,
    authors: [{
      name: 'Yuval Noah',
      surname: 'Harari'
    }]
  },
  {
    title: 'Homo Deus: A Brief History of Tomorrow',
    publicationDate: 2016,
    authors: [{
      name: 'Yuval Noah',
      surname: 'Harari'
    }]
  },
  {
    title: '21 Lessons for the 21st Century',
    publicationDate: 2018,
    authors: [{
      name: 'Yuval Noah',
      surname: 'Harari'
    }]
  }
];

const fixtures = data.map( row => {
  return {
    model: model,
    data: row
  }
});

module.exports = fixtures;