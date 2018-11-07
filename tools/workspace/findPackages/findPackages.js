const path = require('path');
const globby = require('globby');
const { findWorkspace } = require('../findWorkspace/findWorkspace');

const workspaceRootDir = findWorkspace();

const findPackages = (globPattern) => {
  if (!globPattern) {
    return [];
  }
  return globby.sync(path.join(globPattern, 'package.json'), {
    cwd: workspaceRootDir,
    strict: true,
    absolute: true,
  });
};

module.exports = {
  findPackages,
};
