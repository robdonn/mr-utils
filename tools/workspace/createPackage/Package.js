const path = require('path');

class Package {
  constructor(packageJsonLocation) {
    this.packageJson = require(packageJsonLocation);
    this.location = path.join(packageJsonLocation, '..');
    this.name = this.packageJson.name;
    this.version = this.packageJson.version;
    this.description = this.packageJson.description;
  }
}

module.exports = {
  Package,
};
