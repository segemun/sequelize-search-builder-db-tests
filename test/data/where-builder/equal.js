module.exports = [
  {
    it: 'Equal author.name',
    modelName: 'author',
    request: {
      filter: {
        'author.name': 'Richard',
      }
    },
    expected: [1]
  },
  {
    it: 'Equal author.surname',
    modelName: 'author',
    request: {
      filter: {
        'author.surname': 'Harari',
      }
    },
    expected: [2]
  },
  {
    it: 'Equal book.title',
    modelName: 'book',
    request: {
      filter: {
        'book.title': 'The Selfish Gene',
      }
    },
    expected: [1]
  },
  {
    it: 'Equal book.publicationDate (int)',
    modelName: 'book',
    request: {
      filter: {
        'book.publicationDate': '1996',
      }
    },
    expected: [1, 2]
  },
  {
    it: 'Equal book.publicationDate (string)',
    modelName: 'book',
    request: 'filter[book.publicationDate]=1996',
    expected: [1, 2]
  },
  {
    it: 'Equal book.publicationDate (string with prefix)',
    modelName: 'book',
    request: '?filter[book.publicationDate]=1996',
    expected: [1, 2]
  },
];