const utils = require('../utils');

const buildPool = async (entry) => {
  const pool = {
    pool: entry.pool,
    chain: utils.formatChain('ethereum'),
    project: 'yield-basis',
    symbol: 'YB-WBTC',
    tvlUsd: entry.tvlUsd,
    apy: entry.apy,
  };
  return pool;
};

const main = async () => {
  const data = await utils.getData('https://data.yieldbasis.com/api/v1/graphql');
  return data.map(buildPool);
};

module.exports = {
  timetravel: false,
  apy: main,
};
