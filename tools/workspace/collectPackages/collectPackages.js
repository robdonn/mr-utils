const { findPackages } = require('../findPackages/findPackages');

const reducer = (acc, curr) => acc.concat(findPackages(curr));

const collectPackages = workspaces => workspaces.reduce(reducer, []);

module.exports = {
  collectPackages,
};
