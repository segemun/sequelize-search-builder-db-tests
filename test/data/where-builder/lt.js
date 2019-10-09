module.exports = [
  {
    it: 'Lt book.publicationDate',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': {
          lt: '1996'
        },
      }
    },
    expected: [4]
  },
];