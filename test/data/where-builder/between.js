module.exports = [
  {
    it: 'Between book.publicationDate',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': {
          between: ['1995','1997']
        },
      }
    },
    expected: [1, 2]
  },
];