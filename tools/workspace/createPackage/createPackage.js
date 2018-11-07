const { Package } = require('./Package');

const createPackage = packageJsonLocation => new Package(packageJsonLocation);

module.exports = {
  createPackage,
};
