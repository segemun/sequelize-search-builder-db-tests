module.exports = [
  {
    it: 'Gte book.publicationDate',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': {
          gte: '2018'
        },
      }
    },
    expected: [7]
  },
];