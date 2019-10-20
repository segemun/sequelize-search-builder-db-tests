module.exports = [
  {
    it: 'Condition with Like author.name and author.surname',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          like: '%val N%'
        },
        'author.surname': {
          like: '%ara%'
        }
      }
    },
    expected: [2],
  },
  {
    it: 'Condition AND and OR with author.id and author.surname',
    modelName: 'author',
    request: {
      filter: {
        'author.id': {
          gt: 1,
          lt: 3,
          _condition: 'and',
        },
        'author.surname': 'Dawkins',
        _condition: 'or',
      }
    },
    expected: [1, 2],
  },
  {
    it: 'Condition AND with author.id and author.surname (empty result)',
    modelName: 'author',
    request: {
      filter: {
        'author.id': {
          gt: 1,
          lt: 3,
          _condition: 'and',
        },
        'author.surname': 'Dawkins',
        _condition: 'and',
      }
    },
    expected: [],
  },
  {
    it: 'Condition AND with author.id and author.surname (not empty result)',
    modelName: 'author',
    request: {
      filter: {
        'author.id': {
          gt: 1,
          lt: 3,
          _condition: 'and',
        },
        'author.surname': 'Harari',
        _condition: 'and',
      }
    },
    expected: [2],
  },
  {
    it: 'Condition with default AND with author.id and author.surname (not empty result)',
    modelName: 'author',
    request: {
      filter: {
        'author.id': {
          gt: 1,
          lt: 3,
        },
        'author.surname': 'Harari',
      }
    },
    expected: [2],
  },
  {
    it: 'Condition AND with author.id and author.surname (not empty result)',
    modelName: 'author',
    request: 'filter[author.id][gt]=1&filter[author.id][lt]=3&filter[author.surname]=Harari',
    expected: [2],
  },
];