const SearchBuilder = require('sequelize-search-builder');
const models = require('../app/models');
const _ = require('lodash');
const { expect } = require('chai');

const equalData = require('./data/where-builder/equal');
const gtData = require('./data/where-builder/gt');
const gteData = require('./data/where-builder/gte');
const ltData = require('./data/where-builder/lt');
const lteData = require('./data/where-builder/lte');
const neData = require('./data/where-builder/ne');
const betweenData = require('./data/where-builder/between');
const notBetweenData = require('./data/where-builder/notBetween');
const inData = require('./data/where-builder/in');
const notInData = require('./data/where-builder/notIn');
const likeData = require('./data/where-builder/like');
const notLikeData = require('./data/where-builder/notLike');

const orderData = require('./data/order-builder');

async function makeRequest(request, modelName){
  const searchBuilder = new SearchBuilder(models.Sequelize, request);

  return await models[modelName].findAll({
    include: [{all: true, nested: true}],
    where: searchBuilder.getWhereQuery(),
    order: searchBuilder.getOrderQuery() || [['id', 'asc']],
  }).map(value => value.get({plain: true})); 
};

function compareWhereDataset(row) {
  compareDataset(row);
}

function compareOrderDataset(row) {
  compareDataset(row);
}

function compareDataset(row) {
  it(row.it, async () => {
    const data = await makeRequest(row.request, row.modelName);
    const idList = data.map(record => record.id);

    if (typeof row.expected === 'function') {
      expect(row.expected(data)).to.equal(true);
    } else {
      expect(_.isEqual(idList, row.expected)).to.equal(true);
    }
  });
}

describe('SearchBuilder', () => {
  describe('WhereBuilder', () => {
    describe('Equal operator (=, eq)', () => {
      equalData.forEach(compareWhereDataset);
    });
    describe('Gt operator', () => {
      gtData.forEach(compareWhereDataset);
    });
    describe('Gte operator', () => {
      gteData.forEach(compareWhereDataset);
    });
    describe('Lt operator', () => {
      ltData.forEach(compareWhereDataset);
    });
    describe('Lte operator', () => {
      lteData.forEach(compareWhereDataset);
    });
    describe('Ne operator', () => {
      neData.forEach(compareWhereDataset);
    });
    describe('Between operator', () => {
      betweenData.forEach(compareWhereDataset);
    });
    describe('Not Between operator', () => {
      notBetweenData.forEach(compareWhereDataset);
    });
    describe('In operator', () => {
      inData.forEach(compareWhereDataset);
    });
    describe('Not In operator', () => {
      notInData.forEach(compareWhereDataset);
    });
    describe('Like operator', () => {
      likeData.forEach(compareWhereDataset);
    });
    describe('Not Like operator', () => {
      notLikeData.forEach(compareWhereDataset);
    });
  });
  
  describe('OrderBuilder', () => {
    describe('Order query', () => {
      orderData.forEach(compareOrderDataset);
    });
  });
});