module.exports = [
  {
    it: 'Not Like author.name (%...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          notLike: '%val N%'
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
          notLike: 'Richa%'
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
          notLike: '% Noah'
        },
      }
    },
    expected: [1, 3]
  },
]