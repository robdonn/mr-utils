const path = require('path');
const { findWorkspace } = require('./findWorkspace/findWorkspace');
const { collectPackages } = require('./collectPackages/collectPackages');
const { createPackage } = require('./createPackage/createPackage');

class Workspace {
  constructor() {
    this.location = findWorkspace();

    if (!this.location) {
      throw new Error('This is not a workspace');
    }

    this.packageJson = require(path.join(this.location, 'package.json'));
    this.packages = this.collectPackages();
  }

  collectPackages() {
    const workspaces = Array.isArray(this.packageJson.workspaces)
      ? this.packageJson.workspaces
      : this.packageJson.workspaces.packages;
    return collectPackages(workspaces).map(packageJsonLocation =>
      createPackage(packageJsonLocation)
    );
  }
}

console.log(new Workspace());
