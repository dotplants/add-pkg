const managers = {
  yarn: {
    file: 'yarn.lock',
    exist: 'yarn -v',
    add: {
      normal: 'yarn add {packages}',
      dev: 'yarn add {packages} --dev',
      global: 'yarn global add {packages}'
    }
  },
  npm: {
    file: 'package-lock.json',
    exist: 'npm -v',
    add: {
      normal: 'npm install --save {packages}',
      dev: 'npm install --save-dev {packages}',
      global: 'npm install -g {packages}'
    }
  }
};

module.exports = managers;
