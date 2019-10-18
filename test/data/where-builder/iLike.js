module.exports = [
  {
    it: 'iLike author.name (%...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          iLike: '%vAL n%'
        },
      }
    },
    expected: [2]
  },
  {
    it: 'iLike author.name (...%)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          iLike: 'riCHa%'
        },
      }
    },
    expected: [1]
  },
  {
    it: 'iLike author.name (%...)',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          iLike: '% nOaH'
        },
      }
    },
    expected: [2]
  },
];