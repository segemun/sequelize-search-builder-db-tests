module.exports = [
  {
    it: 'Not Like author.name (%...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          notLike: '%Val n%'
        },
      }
    },
    expected: [1, 3]
  },
    {
    it: 'Not Like author.name (...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          notLike: 'RiCHa%'
        },
      }
    },
    expected: [2, 3]
  },
  {
    it: 'Not Like author.name (%...)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          notLike: '% NoaH'
        },
      }
    },
    expected: [1, 3]
  },
]