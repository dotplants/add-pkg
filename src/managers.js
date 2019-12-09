const managers = {
  pnpm: {
    file: 'pnpm-lock.yaml',
    base: 'pnpm',
    add: {
      normal: 'pnpm add {packages}',
      dev: 'pnpm add -D {packages}',
      global: 'pnpm add {packages} --global'
    }
  },
  yarn: {
    file: 'yarn.lock',
    base: 'yarn',
    add: {
      normal: 'yarn add {packages}',
      dev: 'yarn add {packages} --dev',
      global: 'yarn global add {packages}'
    }
  },
  npm: {
    // npm write last (for fallback)
    file: 'package-lock.json',
    base: 'npm',
    add: {
      normal: 'npm install --save {packages}',
      dev: 'npm install --save-dev {packages}',
      global: 'npm install -g {packages}'
    }
  }
};

module.exports = managers;
