module.exports = [
    {
      it: 'Not Regexp author.name',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            notRegexp: 'val N'
          },
        }
      },
      expected: [1, 3]
    },
    {
      it: 'Not Regexp author.name all authors',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            notRegexp: '^val N'
          },
        }
      },
      expected: [1, 2, 3]
    },
    {
      it: 'Regexp author.name start with',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            notRegexp: '^Yuval N'
          },
        }
      },
      expected: [1, 3]
    },
  ];