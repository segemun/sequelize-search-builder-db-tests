module.exports = [
  {
    it: 'Like author.name (%...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          like: '%val N%'
        },
      }
    },
    expected: [2]
  },
  {
    it: 'Like author.name (...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          like: 'Richa%'
        },
      }
    },
    expected: [1]
  },
  {
    it: 'Like author.name (%...)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          like: '% Noah'
        },
      }
    },
    expected: [2]
  },
];