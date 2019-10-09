module.exports = [
  {
    it: 'Gt book.publicationDate',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': {
          gt: '2016'
        },
      }
    },
    expected: [7]
  },
];