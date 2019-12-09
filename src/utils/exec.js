const exec = require('child_process').exec;

const execPromise = command =>
  new Promise(resolve => {
    exec(command, (err, stdout, stderr) => {
      if (err || stderr) {
        return resolve(false);
      }

      resolve(stdout);
    });
  });

module.exports = execPromise;
