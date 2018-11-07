const fs = require('fs');
const path = require('path');

const findWorkspace = ({ startingDir = process.cwd() } = {}) => {
  const dirName = path.resolve(startingDir);
  const filePath = path.join(dirName, 'package.json');

  const exists = fs.existsSync(filePath);

  if (exists) {
    const packageJson = require(filePath);

    if (packageJson.workspaces) {
      return dirName;
    }
  }

  const parentDir = path.join(dirName, '..');

  if (parentDir !== dirName) {
    return findWorkspace({ startingDir: parentDir });
  }

  return null;
};

module.exports = {
  findWorkspace,
};
