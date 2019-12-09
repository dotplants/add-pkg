const exec = require('../utils/exec');
const existFile = require('../utils/exist-file');

const managers = require('../managers');

const result = {
  manager: [],
  file: []
};

const checker = async managerName => {
  const v = managers[managerName];
  if (!v) {
    throw new Error('Unknown manager');
  }

  const manager = await exec(v.exist);
  if (!manager) {
    return false;
  }
  result.manager.push(managerName);

  const file = await existFile(v.file);
  if (!file) {
    return false;
  }
  result.file.push(managerName);

  return managerName;
};

const selectManager = async () => {
  const promise = Object.keys(managers).map(key => checker(key));
  const test = await Promise.all(promise);

  // step1: ここで一番若いtestがあれば召喚
  const step1 = test.find(v => v);
  if (step1) {
    return step1;
  }

  // step2: が無ければresult.manager[0]
  const step2 = result.manager[0];
  if (step2) {
    return step2;
  }

  // がなければerror
  throw new Error('You do not have any package manager!');
};

module.exports = selectManager;
