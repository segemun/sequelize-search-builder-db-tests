module.exports = [
  {
    it: 'Order by author.id asc',
    modelName: 'author',
    request: {
      order: {
        'id': 'asc'
      }
    },
    expected: [1, 2, 3],
  },
  {
    it: 'Order by author.id desc',
    modelName: 'author',
    request: {
      order: {
        'id': 'desc'
      }
    },
    expected: [3, 2, 1],
  },
  {
    it: 'Order book by publicationDate asc',
    modelName: 'book',
    request: {
      order: {
        'publicationDate': 'asc'
      }
    },
    expected: [ 4, 2, 1, 3, 5, 6, 7 ],
  },
  {
    it: 'Order book by publicationDate desc',
    modelName: 'book',
    request: {
      order: {
        'publicationDate': 'desc'
      }
    },
    expected: [ 7, 6, 5, 3, 2, 1, 4 ],
  },
  {
    it: 'Order book by publicationDate asc title desc',
    modelName: 'book',
    request: {
      order: {
        'publicationDate': 'asc',
        'title': 'desc',
      }
    },
    expected: [ 4, 1, 2, 3, 5, 6, 7 ],
  },
];