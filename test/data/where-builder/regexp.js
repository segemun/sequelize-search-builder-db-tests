module.exports = [
  {
    it: 'Regexp author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          regexp: 'val N'
        },
      }
    },
    expected: [2]
  },
  {
    it: 'Regexp author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          regexp: '^val N'
        },
      }
    },
    expected: []
  },
  {
    it: 'Regexp author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          regexp: '^Yuval N'
        },
      }
    },
    expected: [2]
  },
];