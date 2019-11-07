module.exports = [
    {
      it: 'notIRegexp author.name',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            notIRegexp: 'vAl N'
          },
        }
      },
      expected: [1, 3]
    },
    {
      it: 'notIRegexp author.name all authors',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            notIRegexp: '^Val N'
          },
        }
      },
      expected: [1, 2, 3]
    },
    {
      it: 'notIRegexp author.name start with',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            notIRegexp: '^YuVal N'
          },
        }
      },
      expected: [1, 3]
    },
  ];