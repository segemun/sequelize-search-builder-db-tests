module.exports = [
  {
    it: 'Not In author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          notIn: ['Richard']
        },
      }
    },
    expected: [2, 3]
  },
];