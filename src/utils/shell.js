const path = require('path');
const { spawn } = require('child_process');
const { logError } = require('./logger');

const isWin = process.platform === 'win32';

const shell = (command, args) =>
  new Promise(resolve => {
    if (isWin) {
      command = command + '.cmd';
    }

    const run = spawn(command, args, {
      cwd: path.resolve('.'),
      stdio: 'inherit'
    });

    run.on('close', code => {
      if (code) {
        logError(`Process exited with code ${code}`);
      }
      resolve(code);
    });
  });

module.exports = shell;
