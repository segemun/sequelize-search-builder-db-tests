module.exports = [
  {
    it: 'Not Between book.publicationDate',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': {
          notBetween: ['1986','2017']
        },
      }
    },
    expected: [7]
  },
];