const exec = require('../utils/exec');
const existFile = require('../utils/exist-file');

const managers = require('../managers');

const isWin = process.platform === 'win32';

const checker = async managerName => {
  const result = {
    managerName,
    hasManager: false,
    hasLockFile: false
  };
  const v = managers[managerName];
  if (!v) {
    throw new Error('Unknown manager');
  }

  const command = isWin ? `where.exe ${v.base}` : `which ${v.base}`;
  const manager = await exec(command);
  if (!manager) {
    return result;
  }
  result.hasManager = true;

  const file = await existFile(v.file);
  if (!file) {
    return result;
  }
  result.hasLockFile = true;

  return result;
};

const selectManager = async () => {
  const promise = Object.keys(managers).map(key => checker(key));
  const test = await Promise.all(promise);

  // step1: has manager & lockfile
  const step1 = test.find(v => v.hasManager && v.hasLockFile);
  if (step1) {
    return step1.managerName;
  }

  // step2: has manager
  const step2 = test.find(v => v.hasManager);
  if (step2) {
    return step2.managerName;
  }

  // error
  throw new Error('You do not have any package manager!');
};

module.exports = selectManager;
