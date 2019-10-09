module.exports = [
  {
    it: 'Lte book.publicationDate',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': {
          lte: '1986'
        },
      }
    },
    expected: [4]
  },
];