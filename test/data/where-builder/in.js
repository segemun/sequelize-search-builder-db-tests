module.exports = [
  {
    it: 'In author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          in: ['Richard','Yuval Noah']
        },
      }
    },
    expected: (result) => {
      return (result.length === 2);
    }
  },
];