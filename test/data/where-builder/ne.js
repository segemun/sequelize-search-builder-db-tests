module.exports = [
  {
    it: 'Ne author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          ne: 'Richard'
        },
      }
    },
    expected: [2, 3]
  },
];