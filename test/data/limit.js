module.exports = [
    {
    it: 'In author.name with limit 2',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          in: ['Richard','Yuval Noah']
        },
      },
      limit: 2,
    },
    expected: (result) => {
      return (result.length === 2);
    }
  },
  {
    it: 'In author.name with limit 1',
    modelName: 'author',
    request: {
      filter: {
        'author.name': {
          in: ['Richard','Yuval Noah']
        },
      },
      limit: 1,
    },
    expected: (result) => {
      return (result.length === 1);
    }
  },
    {
    it: 'In author.name with limit and offset',
    modelName: 'author',
    request: {
      limit: 2,
      offset: 2,
    },
    expected: (result) => {
      return (result.length === 1);
    }
  },
];