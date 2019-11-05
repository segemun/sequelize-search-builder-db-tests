module.exports = [
    {
      it: 'iRegexp author.name',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            iRegexp: 'vAl N'
          },
        }
      },
      expected: [2]
    },
    {
      it: 'iRegexp author.name empty response',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            iRegexp: '^vAl N'
          },
        }
      },
      expected: []
    },
    {
      it: 'iRegexp author.name start with',
      modelName: 'author',
      request: {
        filter: {
          'author.name': {
            iRegexp: '^Yuval n'
          },
        }
      },
      expected: [2]
    },
  ];